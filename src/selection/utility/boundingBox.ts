// SPDX-License-Identifier: Apache-2.0
// Copyright : J.P. Morgan Chase & Co.

import { Mesh, Vector3, BoundingInfo, TransformNode } from '@babylonjs/core';
import { Selection } from '../index';

/**
 * Calculates the cumalitive bounding box of the current selection.
 *
 * @returns instance of BoundingInfo class, an object containing all bounding box values.
 */
export function boundingBox(this: Selection): BoundingInfo {
  let firstNode = this.selected[0];
  let selectionMin: Vector3 = (firstNode instanceof Mesh) ? firstNode.getBoundingInfo().boundingBox.minimumWorld : (firstNode instanceof TransformNode) ? (this.selected[0] as TransformNode).position : new Vector3;
  let selectionMax: Vector3 = (firstNode instanceof Mesh) ? firstNode.getBoundingInfo().boundingBox.maximumWorld : (firstNode instanceof TransformNode) ? (this.selected[0] as TransformNode).position : new Vector3;


  this.selected.forEach((node, i) => {
    node.computeWorldMatrix(true);
    let meshes = (node.getChildMeshes().length > 0) ? node.getChildMeshes() : [node];
    console.log(meshes)
    //selectionMin = meshes[0].getBoundingInfo().boundingBox.minimumWorld;
    //selectionMax = meshes[0].getBoundingInfo().boundingBox.maximumWorld;
    meshes.forEach((mesh, j) => {
      mesh.computeWorldMatrix(true); //without this the bounding box is calulcated at the mesh creation position...TODO investigate.
      if (mesh instanceof Mesh) {
      let nodeMin = mesh.getBoundingInfo().boundingBox.minimumWorld;
      let nodeMax = mesh.getBoundingInfo().boundingBox.maximumWorld;
      selectionMin = Vector3.Minimize(selectionMin, nodeMin);
      selectionMax = Vector3.Maximize(selectionMax, nodeMax);
      } else {
        selectionMin = Vector3.Minimize(selectionMin, (mesh as TransformNode).position);
        selectionMax = Vector3.Maximize(selectionMax, (mesh as TransformNode).position);
      }
    
    });
  });

  return new BoundingInfo(selectionMin, selectionMax);
}

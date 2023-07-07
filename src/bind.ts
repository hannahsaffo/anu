import { Node, ActionManager, Tags, Mesh, Scene } from '@babylonjs/core';
import { Selection } from './index';
import { create } from './create';


/**
 * Take a selection, a shape type, and data. For each index in the data create a new mesh for each node in the selection as the parrent.
 * The data index of the mesh is also attached to the mesh node object under the metadate property.
 *
 * @param shape A string of the type of the mesh geometry being created.
 * @param scene The Babylon scene you are targeting.
 * @param options A object contantaing the intial mesh parameters for the selected geometry, can be either values or functions.
 * @param data The data to bind elements too, must be passed as a list of objects where each object represents a row of tabular data.
 * @returns An instance of Selection, a class contating a array of selected nodes, the scene, and the functions of the class Selection,
 * or undefined if a selection could not be made.
 */
export function bind(shape: string, scene: Scene,  options: object = {}, data: Array<object> = [{}]): Selection {
    let meshes: Node[] = [];
    data.forEach((element, i) => {
        var mesh = create(shape, shape, scene, options, element);
        if(mesh instanceof Mesh)
            mesh.actionManager = new ActionManager(scene);
        Tags.EnableFor(mesh);
        mesh.metadata = { ...mesh.metadata, data: element };
        meshes.push(mesh);
    });
   
    return new Selection(meshes, scene);
}

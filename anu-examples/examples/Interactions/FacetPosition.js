// SPDX-License-Identifier: Apache-2.0
// Copyright : J.P. Morgan Chase & Co.

//Import everything we need to create our babylon scene and write our visualization code. 
import * as anu from '@jpmorganchase/anu' //Anu for Scene-Graph Manipulation
import iris from '../../data/iris.json' assert {type: 'json'}; //Our data
import {UtilityLayerRenderer, Angle, PlaneRotationGizmo, HemisphericLight, PointerDragBehavior, Vector3, Scene, ArcRotateCamera, TransformNode, ActionManager, InterpolateValueAction, Mesh, ExecuteCodeAction, SixDofDragBehavior} from '@babylonjs/core'; 
import {extent, scaleOrdinal, scaleLinear, schemeCategory10, map, interpolateBlues} from "d3";

//import { Mesh } from 'anu';

//create and export a function that takes a babylon engine and returns a scene
export const facetPosition = function(engine){

  //Create an empty scene
  const scene = new Scene(engine)

  //Add some lighting (name, position, scene)
  new HemisphericLight('light1', new Vector3(0, 10, 0), scene)

  //Add a camera that rotates around the origin 
  const camera = new ArcRotateCamera("Camera", -(Math.PI / 4) * 3, Math.PI / 4, 10, new Vector3(0, 0, 0), scene);
  camera.attachControl(true)
  camera.position = new Vector3(2,2,-3.5);

  //Create the functions that we will use to scale our data according to our desired dimensions. In this case we want to scale the position of our points. 
  //These functions will take a number and scale it between -10 and 10. calling .nice() adds some padding at the beginning and end 
  var scaleX = scaleLinear().domain(extent(map(iris, (d) => {return d.sepalLength}))).range([-1,1]).nice(); //We want to encode sepal length along the x axis, so we make a linear scale function the will scale our data range (min and max sepal length) to our coordinate space (-10, 10 units)
  var scaleY = scaleLinear().domain(extent(map(iris, (d) => {return d.petalLength}))).range([-1,1]).nice(); //
  var scaleZ = scaleLinear().domain(extent(map(iris, (d) => {return d.sepalWidth}))).range([-1,1]).nice(); //Same as X for our Y and Z dimensions 

  //This is a function that will create a color scale for our three types of flowers in our data
  //pass in the flower name and it will return the hex of its color coding. schemecategory10 is an array of 10 color hexes
  var scaleC = scaleOrdinal(anu.ordinalChromatic('d310').toStandardMaterial())

  
  //Create a transform node to use as the parent node for all our meshes
  let CoT = anu.create("cot", "center", {}, {});

  //Select our center or transform with Anu to give us a selection obj CoT.
  let chart = anu.selectName('center', scene);

  

  //This series of chained methods will create our visualization 
  //Using our CoT as a parent we use bind to create sphere meshes for each row of our data
  let spheres = chart.bind('sphere', {diameter: 0.05}, iris) 
    .positionX((d) => scaleX(d.sepalLength)) //most selection methods can either be passed a raw value, or a function that will return the correct value of the attribute
    .positionY((d) => scaleY(d.petalLength))  //When you pass a function the method will pass the data associated with the mesh as JSON and the index of the data (d,i)
    .positionZ((d) => scaleZ(d.sepalWidth)) //So we create a function that takes param d and since we know the keys of the data can pass d.<key> into our function that returns an int
    .material((d,m,i) => scaleC(d.species))
    //.diffuseColor((d) => scaleC(d.species)) //change the diffuse color of our material using our color scale function.
    //Babylon use an action system to trigger events form interacting with meshes, this is a simple example to show a hover interaction. grow when hover and shrink when stopped. 
    .action((d,n,i) => new InterpolateValueAction( 
          ActionManager.OnPointerOverTrigger,
          n,
          'scaling',
          new Vector3(1.2, 1.2, 1.2),
          100
      ))
      .action((d,n,i) => new InterpolateValueAction(
        ActionManager.OnPointerOutTrigger,
        n,
        'scaling',
        new Vector3(1, 1, 1),
        100));
        
    anu.createAxes('test', scene, {parent: chart, scale: {x: scaleX, y: scaleY, z: scaleZ}});

   

    let bounds = chart.boundingBox();

    // let boundingMesh = new Mesh("bounds", scene);
    
    // boundingMesh.setBoundingInfo(bounds);
    // boundingMesh.showBoundingBox = true;

    // console.log(bounds.boundingBox)

    // const drag = new SixDofDragBehavior();

    // drag.faceCameraOnDragStart = true;
    // drag.rotateAroundYOnly = true;

    // let grab = chart.bind("capsule", {height: bounds.boundingBox.extendSize._x / 1.5, radius: 0.03})
    //                 .rotation(new Vector3(0,0, 1.57))
    //                 .positionY(bounds.boundingBox.minimum.y - 0.1)
    //                 .positionZ(bounds.boundingBox.minimum.z)
    //                 .action((d,n,i) => new ExecuteCodeAction( 
    //                   ActionManager.OnPickDownTrigger,
    //                   (d,n,i) => {
    //                     chart.selected[0].addBehavior(drag);
    //                   }
    //               ))
    //               .action((d,n,i) => new ExecuteCodeAction( 
    //                 ActionManager.OnPickOutTrigger,
    //                 (d,n,i) => {
    //                   console.log("out")
    //                   chart.selected[0].removeBehavior(drag);
    //                 }
    //             ))

                    
  //               const utilLayer = new UtilityLayerRenderer(scene);
  //               console.log(UtilityLayerRenderer.DefaultKeepDepthUtilityLayer)
  //               utilLayer.utilityLayerScene.autoClearDepthAndStencil = false;
  //               var gizmo1 = new PlaneRotationGizmo(new Vector3(0,1,0), undefined, utilLayer)
  //               gizmo1.updateScale = false;
               
  //   let rotate = anu.create("torus", "torus", {diameter: bounds.boundingBox.extendSize._x * 0.10, thickness: bounds.boundingBox.extendSize._x * 0.025}, {},  gizmo1.gizmoLayer.utilityLayerScene)
                    
  //                   //.positionY(bounds.boundingBox.minimum.y - 0.1)
  //                   //.positionZ(bounds.boundingBox.minimum.z)
  //                   //.positionX(-0.5)
  

  // gizmo1.attachedMesh = CoT;
  // gizmo1.setCustomMesh(rotate)



  // let rotate2 = chart.bind("torus", {diameter: bounds.boundingBox.extendSize._x * 0.08, thickness: bounds.boundingBox.extendSize._x * 0.025})
  // .positionY(bounds.boundingBox.minimum.y - 0.1)
  // .positionZ(bounds.boundingBox.minimum.z)
  // .positionX(-0.5)
  // .rotationX(1.57)

  // let rotate3 = chart.bind("torus", {diameter: bounds.boundingBox.extendSize._x * 0.09, thickness: bounds.boundingBox.extendSize._x * 0.025})
  // .positionY(bounds.boundingBox.minimum.y - 0.1)
  // .positionZ(bounds.boundingBox.minimum.z)
  // .positionX(-0.5)
  // .rotationZ(1.57)

  //chart.positionY(4)

  //chart.positionUI();
    //
    chart.positionUI();
    chart.scaleUI({minimum: 0.5, maximum: 2});
    chart.rotateUI();
    //chart.scaling(new Vector3(2,2,2))
    //chart.positionY(2)
    //camera.setTarget(CoT);

   

    

    return scene;
  
  };
  


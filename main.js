import './style.css'

import * as THREE from 'three';

/**
 * To start things off you always need three objects: 
 * 1. Scene - its a container that holds all of the objects, cameras and lights. 
 * 2. Camera - Needed to see inside the scene. PerspectiveCamera() will mimic what human eyes will see. 
 * 3. Renderer - To render the graphics into the scene.
 * */
const scene = new THREE.Scene();

//1st Argument: Field of View - The amount of the world that's visible based on a full 360 degrees
//2nd Argument: Aspect Ratio - Based on the user's browser window. 
//3rd & 4th Arguments: View Frustrum - Control which objects are visible relative to the camera itself.   
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer - needs to know what DOM element to use.
const renderer = new THREE.WebGLRendRend({
  canvas: document.querySelector('#background'),
});

//We can use the renderer to set the pixel ratio to the window device pixel ratio.
renderer.setPixelRatio(window.devicePixelRatio);
//Make it a full screen canvas by setting the renderer size to the window size.
renderer.setSize(window.innerWidth, window.innerHeight);  




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
//3rd & 4th Arguments: View Frustum - Control which objects are visible relative to the camera itself.   
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer - needs to know what DOM element to use.
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});
//We can use the renderer to set the pixel ratio to the window device pixel ratio.
renderer.setPixelRatio(window.devicePixelRatio);
//Make it a full screen canvas by setting the renderer size to the window size.
renderer.setSize(window.innerWidth, window.innerHeight);  

//Move camera in the z axis
camera.position.setZ(30);
camera.position.setX(-3);

//Call the renderer's render method passing it the scene and camera as arguments
renderer.render(scene, camera);

//NEXT: Add an object to the renderer. 

//Three Basic Steps To Create An Object
//1. Geometry - a set of vectors that define the object itself. 
//Platonic Solid - 12 faces; 20 points, 30 edges. 
// const geometry = new THREE.DodecahedronGeometry(12,0);
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);


//2. We need to define the material: Gives it color and texture.
//NOTE: Custom Shaders can be created with WebGL.
//Note: Basic material don't require a light source. Other materials will.
// Wireframe = True - gives you a look at the its actual geometry. 
const material = new THREE.MeshNormalMaterial({ color: 0xff6347, wireframe: true });

//3rd - Create a mesh by combinding the geometry with the material. 
const torus = new THREE.Mesh(geometry, material);


//4th - Add it to the scene. 
scene.add(torus);
//But instead we will create a recursive function that gives us an infinite loop that calls the render method automatically. 
function animate(){
  //Calls this function "requestAnimationFrame" in the browser. It tells the browser you want to perform an animation. 
  requestAnimationFrame(animate);
  //Re-render the scene by calling the render method. Repaints the screen to update the UI. (Similar to a Game Loop)
  renderer.render(scene, camera);
};

animate();
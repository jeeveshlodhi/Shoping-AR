import * as THREE from 'three';

import { OrbitControls } from 'https://unpkg.com/three@0.142.0/examples/jsm/controls/OrbitControls.js';
import { Color } from 'three';
// import { RoomEnvironment } from 'https://unpkg.com/three@0.142.0/examples/jsm/environments/RoomEnvironment.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/GLTFLoader.js';
const COLORS = [ 0x69D2E7, 0xA7DBD8, 0xE0E4CC, 0xF38630, 0xFA6900, 0xFF4E50, 0xF9D423 ]
var spheres = []
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.SphereGeometry( 250, 30, 30 );
let material = new THREE.MeshBasicMaterial({color: 0x333344})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

camera.position.z = 600

for(let i=0;i<30;i++){
    geometry = new THREE.SphereGeometry(Math.floor(Math.random() *(20-8+1)+ 8), 30,30)
    material = new THREE.MeshBasicMaterial({color: COLORS[Math.floor(Math.random()*COLORS.length)]})
    geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,250, 0))
    let mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = Math.floor(Math.random()*100)
    mesh.rotation.y = Math.floor(Math.random()*100)
    mesh.rotation.z = Math.floor(Math.random()*100)
    scene.add(mesh)
    spheres.push(mesh)
}

function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x = 0.01;
    mesh.rotation.y = 0.01;
    for(let i=0;i<spheres.length;i++){
        spheres[i].rotation.x += 0.01;
        spheres[i].rotation.y += 0.01;
        spheres[i].rotation.z += 0.01;
        renderer.render( scene, camera );
    }
};

animate();
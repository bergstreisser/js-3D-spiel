import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const gloader = new GLTFLoader()
    .setPath('./models/helicopter/')
    .load('scene.gltf', (helicopter) => {
        scene.add(helicopter.scene);
    });

scene.background = new THREE.CubeTextureLoader()
    .setPath('./textures/penguins/')
    .load([
        'arid_ft.jpg',
        'arid_bk.jpg',
        'arid_up.jpg',
        'arid_dn.jpg',
        'arid_rt.jpg',
        'arid_lf.jpg'
    ]);

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

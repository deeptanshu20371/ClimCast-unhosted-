import './css/main.css'
import gsap from './node_modules/gsap'
// import * as THREE from 'https://cdn.skypack.dev/-/three@v0.137.5-HJEdoVYPhjkiJWkt6XIa/dist=es2019,mode=raw/build/three.module.js';
import * as THREE from './three.js-master/build/three.module.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js'; 
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/GLTFLoader.js'; 


const canvasContainer = document.querySelector('#canvasContainer')

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  canvasContainer.offsetWidth/canvasContainer.offsetHeight,
  0.1,
  100
)

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  canvas: document.querySelector('canvas')
})

renderer.setSize(3500,700)
// renderer.setSize(innerWidth-10, innerHeight-10)
renderer.setPixelRatio(window.devicePixelRatio)
// document.body.appendChild(renderer.domElement)

const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('/ggg.png')
}))

let vector = new THREE.Vector3(0,0, 0);

scene.position.copy(vector)

// sphere.position.set(1, 1, 1);

sphere.getWorldPosition

const group = new THREE.Group()
group.add(sphere)
scene.add(group)

camera.position.z = 9
// camera.position.x=-5
// camera.position.y= 0

const mouse = {
  x: undefined,
  y: undefined
}


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  sphere.rotation.y += 0.001
  group.rotation.y = mouse.x * 3
  group.rotation.x = -mouse.y * 3
  gsap.to(group.rotation, {
    x: -mouse.y * 0.5,
    y: mouse.x * 0.5
  })
}

document.addEventListener('mousemove', () => {
  mouse.x = (event.clientX / innerWidth)*2 - 1
  mouse.y = -(event.clientY /innerHeight)*2 + 1
  // console.log(mouse)
})

animate()
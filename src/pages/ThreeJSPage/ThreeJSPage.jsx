import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, model, controls;

    const init = () => {
      console.log('Initializing scene...');

      // Create the scene
      scene = new THREE.Scene();

      // Create the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 5, 10);
      camera.lookAt(0, 0, 0);

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x87CEEB); // Sky blue background
      renderer.outputEncoding = THREE.sRGBEncoding;
      mountRef.current.appendChild(renderer.domElement);

      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight1.position.set(5, 10, 5).normalize();
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight2.position.set(-5, -10, -5).normalize();
      scene.add(directionalLight2);

      const pointLight = new THREE.PointLight(0xff0000, 1, 100);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);

      const spotLight = new THREE.SpotLight(0x00ff00, 1);
      spotLight.position.set(-10, 20, -10);
      spotLight.angle = Math.PI / 6;
      spotLight.penumbra = 0.2;
      spotLight.decay = 2;
      spotLight.distance = 200;
      scene.add(spotLight);

      console.log('Lights added.');

      // Load the GLB model
      const loader = new GLTFLoader();
      loader.load(
        '/ImageToStl.com_industrial_plant_comp_0910040703.glb', // Path to the .glb file in the public folder
        (gltf) => {
          console.log('Model loaded successfully.');
          model = gltf.scene;

          // Scale and position the model
          model.scale.set(1, 1, 1);
          scene.add(model);

          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          console.log('Model centered and added to the scene.');

          // Adjust camera position based on model size
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
          cameraZ *= 1.5; // Adjust to zoom out
          camera.position.set(0, 0, cameraZ);

          // Ensure the camera is looking at the model's center
          camera.lookAt(new THREE.Vector3(0, 0, 0));
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('An error occurred while loading the model:', error);
        }
      );

      // Add OrbitControls for user interaction
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (controls) controls.update(); // Update OrbitControls
      renderer.render(scene, camera); // Render the scene
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement); // Cleanup on unmount
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeDModelViewer;

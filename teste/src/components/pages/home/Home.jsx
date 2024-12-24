import React, { useEffect, useRef, useState } from "react";
import Container from "../../layouts/container/Container";
import Page from "../../layouts/page/Page";
import styleSheet from './homeStyle.module.css';

import DropDown from "../../layouts/dropDown/DropDown";
import { Color } from "../../layouts/input/Input";

import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import URDFLoader from 'urdf-loader';


const Home = () => {
  const mountRef = useRef(null);
    const [needRender, setNeedRender] = useState(true);
    const rendererRef = useRef(null);
    const modelRef = useRef(null);



    //Variáveis -----------------------------------------------------------------------------------

    //Background color
    const [backgroundColor, setBackgroundColor] = useState("#E91E63");
    const handleChangeColor = (e) =>{
      const value = e.target.value;
      setBackgroundColor(value);

      if(rendererRef){
        rendererRef.current.setClearColor(backgroundColor);
      }
    }





    //---------------------------------------------------------------------------------------------
    



    //CRIAÇÃO 3D AMBIENTE
    // useEffect(() => {
    //   const scene = new THREE.Scene();
  
    //   //Constroi a câmera do modelo 3d
    //   const camera = new THREE.PerspectiveCamera(
    //     45,
    //     mountRef.current.clientWidth / mountRef.current.clientHeight,
    //     0.1,
    //     1000
    //   );
    //   camera.position.set(0, 10, 30);
    //   camera.lookAt(0, 0, 0);
  
    //   //Contrução do renderizador dos modelos
    //   const renderer = new THREE.WebGLRenderer({ antialias: true });
    //   rendererRef.current = renderer;
  
    //   renderer.setSize(
    //     mountRef.current.clientWidth,
    //     mountRef.current.clientHeight
    //   );
    //   renderer.setClearColor(backgroundColor);
  
    //   renderer.shadowMap.enabled = true; // Sombras para ficar bonitin
    //   mountRef.current.appendChild(renderer.domElement);
  
    //   //LUZ direcional para ficar mais visível e realista
    //   const light = new THREE.AmbientLight(0xffffff, 1); // Luz ambiente fraca
    //   scene.add(light);
  
    //   const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Luz direcional mais intensa
    //   directionalLight.position.set(10, 10, 10); // Posição da luz muito bugada e difícil de entender
    //   directionalLight.shadow.mapSize.width = 1024;
    //   directionalLight.shadow.mapSize.height = 1024;
  
    //   scene.add(directionalLight);

  
    //   //IMPORTAR modelo aqui
    //   // const loader = new GLTFLoader();
    //   // loader.load(
    //   //   "/assets/scene.gltf",
    //   //   (gltf) => {
    //   //     // POSSÍVEL SOLUÇÃO DOS MEUS PROBLEMAS DE TRAVAMENDO MEU DEUS - Não foi!
    //   //     if (modelRef.current) {
    //   //       scene.remove(modelRef.current);
            
    //   //       // Itera e apaga os trem
    //   //       modelRef.current.traverse((child) => {
    //   //         if (child.isMesh) {
    //   //           if (child.geometry) child.geometry.dispose();
    //   //           if (child.material) {
    //   //             if (Array.isArray(child.material)) {
    //   //               child.material.forEach((mat) => mat.dispose());
    //   //             } else {
    //   //               child.material.dispose();
    //   //             }
    //   //           }
    //   //         }
    //   //       });
    //   //     }



    //   //     const model = gltf.scene;
    //   //     scene.add(model);
  
    //   //     // Ajustes
    //   //     model.scale.set(1, 1, 1);
    //   //     model.position.set(0, -10, 0);
  
    //   //     // Referencia para usar depois
    //   //     modelRef.current = model;

          
          
  
    //   //   },
    //   //   undefined,
    //   //   (error) => {
    //   //     console.error("Erro ao carregar modelo GLTF:", error);
    //   //   }
    //   // );

    //   const loader = new URDFLoader();
    //   loader.load(
    //     '/assets/nao.urdf',
    //     (robot) => {
    //       scene.add(robot);
    //       robot.rotation.set(0, Math.PI / 2, 0);
    //     },
    //     undefined,
    //     (error) => {
    //       console.error("Erro ao carregar URDF:", error);
    //     }
    //   );







  
    //   // OrbitControls (controle do mouse)
    //   const controls = new OrbitControls(camera, renderer.domElement);
    //   controls.enableDamping = true; // Inércia no movimento (babado realista)
    //   controls.dampingFactor = 0.05;
    //   controls.screenSpacePanning = false;
    //   controls.maxPolarAngle = Math.PI / 2; // Limitar a rotação vertical
    //   controls.minDistance = 2;
    //   controls.maxDistance = 50;
    //   controls.enablePan = false;
    //   controls.rotateSpeed = 0.5;
    //   controls.zoomSpeed = 1;
    //   controls.panSpeed = 0.8;
  
    //   controls.addEventListener("change", () => {
    //     setNeedRender(true);
    //   });
  
    //   const animate = () => {
    //     requestAnimationFrame(animate);
    //     controls.update(); // Atualiza a posição da câmera pro orbits funcionar amém jesus
  
  
    //     if (needRender) {
    //       controls.update();
    //       renderer.render(scene, camera);
    //       setNeedRender(false);
    //     }
    //   };
    //   renderer.setAnimationLoop(animate);
  
    //   return () => {
    //     if (mountRef.current && renderer.domElement) {
    //       mountRef.current.removeChild(renderer.domElement);
    //     }
    //     renderer.dispose();
    //     scene.clear();
    //   };
    // }, []);


  return (
    <Page title={"Dashboard"}>
      <Container pdy-20 c>
        {/* <div className={styleSheet.view3D} ref={mountRef}></div> */}
      </Container>
      <DropDown title={"Opções"}>
        <Container cl f pd15>
          <Color value={backgroundColor} onChange={handleChangeColor} id={"backgroundColor"} />

        </Container>
      </DropDown>
    </Page>
  );
};

export default Home;

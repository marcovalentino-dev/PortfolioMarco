"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export default function MarcoAvatarAbout(props) {
  const group = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animation, setAnimation] = useState("waving"); // Inizia con waving
  const [isAnimating, setIsAnimating] = useState(true); // Indica se un'animazione è in corso
  const [position, setPosition] = useState([-0.1, -1.4, -1]);
  const [scale, setScale] = useState([2.1, 2.1, 2.1]);

  const { nodes, materials } = useGLTF("/models/MarcoAvatar.glb");

  // const { animations: wakeUpAnimation } = useFBX("animations/wakeUp.fbx");
  const { animations: wavingAnimation } = useFBX("animations/Hip Hop Dancing.fbx");
  const { animations: idleAnimation } = useFBX("animations/idle.fbx");

  // wakeUpAnimation[0].name = "wakeUp";
  wavingAnimation[0].name = "waving";
  idleAnimation[0].name = "idle";

  const { actions } = useAnimations(
    /*wakeUpAnimation[0],*/ [wavingAnimation[0], idleAnimation[0]],
    group
  );

    // Adjust position and scale based on screen size
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
  
        if (width < 600){
          setPosition([0, 0, 0]);
          setScale([0,0,0]);
        } else if (width < 1200) {
          setPosition([-0.1, -1.2, -1]);
          setScale([2.5, 2.5, 2.5]);
        } else {
          setPosition([-0.1, -1.4, -1]);
          setScale([2.1, 2.1, 2.1]);
        }
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  // Listener per il movimento del mouse
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isAnimating) {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isAnimating]);

  useFrame(() => {
    const head = group.current.getObjectByName("Head");
    if (head && !isAnimating) {
      const rotationY = mousePosition.x * 1;
      head.rotation.y = clamp(rotationY, -0.5, 0.5);

      const rotationX = mousePosition.y * 1;
      head.rotation.x = -clamp(rotationX, 0, 1.5);
    }
  });

  useEffect(() => {
    if (animation && actions[animation]) {
      actions[animation].reset().play();
    }

    let timeoutId;

    if (animation === "waving") {
      timeoutId = setTimeout(
        () => setAnimation("idle"),
        wavingAnimation[0].duration * 1000
      );
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }

    return () => {
      clearTimeout(timeoutId);
      if (animation && actions[animation]) {
        actions[animation].stop();
      }
    };
  }, [
    animation,
    actions /*wakeUpAnimation*/,
    ,
    wavingAnimation,
    idleAnimation,
  ]);

  return (
    <group>
      <group
        {...props}
        ref={group}
        dispose={null}
        position={position}
        scale={scale}
        rotation={[0, 0, 0]}
        rotation-x={-Math.PI / 2}
      >
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/MarcoAvatar.glb");

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

export default function MarcoAvatarProjects(props) {
  const group = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animation, setAnimation] = useState("wakeUp");
  const [position, setPosition] = useState([-0.1, -2, 1.5]);
  const [scale, setScale] = useState([0, 0, 0]);
  const [isScaling, setIsScaling] = useState(false); // Indica se un'animazione è in corso
  const [isAnimating, setIsAnimating] = useState(true); // Indica se un'animazione è in corso

  const { nodes, materials } = useGLTF("/models/MarcoAvatar.glb");

  const { animations: wakeUpAnimation } = useFBX("animations/wakeUp.fbx");
  const { animations: climbAnimation } = useFBX("animations/FreehangClimb.fbx");
  const { animations: thirdAnimation } = useFBX("animations/idle.fbx"); // Sostituisci "ThirdAnimation.fbx" con il nome della tua terza animazione

  wakeUpAnimation[0].name = "wakeUp";
  climbAnimation[0].name = "FreehangClimb";
  thirdAnimation[0].name = "idle";

  const { actions } = useAnimations(
    [wakeUpAnimation[0], climbAnimation[0], thirdAnimation[0]],
    group
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 600){

        setScale([0,0,0]);
      } else if (width < 1200) {
        setScale([0,0,0]);
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
          x: (event.clientX / window.innerWidth) * 2.5 - 1,
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
      head.rotation.y = clamp(rotationY, 0, 0.5);

      const rotationX = mousePosition.y * 1;
      head.rotation.x = -clamp(rotationX, 0, 1.5);
    }
  });

  useEffect(() => {
    const handleResize = () => {
    const width = window.innerWidth;
      if(animation === "wakeUp" && !isScaling)
      {
        
        setScale([0, 0, 0]);
        setIsScaling(true);
        setIsAnimating(true);
      }
      else if(animation === "FreehangClimb" && isScaling)
      {
        setPosition([-0.1, -6.2, 1.5]);
        if (width < 600){

          setScale([0,0,0]);
        } else if (width < 1200) {
          setScale([0,0,0]);
        } else {
          setScale([1.6,1.6,1.6]);
        }
        setIsScaling(false);
        setIsAnimating(true);
      }
      else if(animation === "idle" && !isScaling)
      {
        setPosition([0.16, -2, 2.5]);
        if (width < 600){

          setScale([0,0,0]);
        } else if (width < 1200) {
          setScale([0,0,0]);
        } else {
          setScale([1.6,1.6,1.6]);
        }
        setIsScaling(true);
        setIsAnimating(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })

  useEffect(() => {
    if (animation && actions[animation]) {
      actions[animation].reset().play();

      let timeoutId;

      if (animation === "wakeUp" && isScaling) {
        timeoutId = setTimeout(() => {
          setAnimation("FreehangClimb");
        }, actions[animation].getClip().duration * 1000);
      } else if (animation === "FreehangClimb" && !isScaling) {
        timeoutId = setTimeout(() => {
          setAnimation("idle");
        }, actions[animation].getClip().duration * 1000);
      }

      return () => {
        clearTimeout(timeoutId);
        if (actions[animation]) {
          actions[animation].fadeOut(20).stop();
        }
      };
    }
  }, [animation, actions]);

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

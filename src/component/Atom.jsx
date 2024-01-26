/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Atom.gltf --transform 
Files: Atom.gltf [29.22KB] > C:\Users\ASUS\Downloads\Atom\Atom-transformed.glb [18.82KB] (36%)
Author: Toby_Kershaw (https://sketchfab.com/Toby_Kershaw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/physics-atom-438f10665243486bb29cff87bea7cd57
Title: Physics Atom
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Atom-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pTorus1_blue_0.geometry} material={materials.blue} rotation={[0, 0, Math.PI / 2]} scale={[0.015, 0.008, 0.007]} />
      <mesh geometry={nodes.pSphere1_red_0.geometry} material={materials.material} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/Atom-transformed.glb')

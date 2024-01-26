import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Stage } from '@react-three/drei'
import Mac from './Mac'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="forest" intensity={0.1} >
        <OrbitControls autoRotate/>
        <Mac/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign
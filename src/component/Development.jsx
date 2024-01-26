import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Stage } from '@react-three/drei'
import Atom from './Atom'

const Development = () => {
  return (
    <Canvas>
      <Stage environment="forest" intensity={0.1} >
        <OrbitControls autoRotate/>
        <Atom/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Development
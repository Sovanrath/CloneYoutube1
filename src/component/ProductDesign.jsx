import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Stage } from '@react-three/drei'
import Shoes from './Shoes'

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="forest" intensity={0.1} >
        <OrbitControls autoRotate/>
        <Shoes/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ProductDesign
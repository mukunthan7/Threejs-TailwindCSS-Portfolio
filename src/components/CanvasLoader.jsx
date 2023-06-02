import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div>
        <div className="text-xl text-primary flex space-x-1"><span>Loading...</span><span className='text-secondary'>{progress.toFixed()}%</span></div>
      </div>
    </Html>
  )
}

export default CanvasLoader
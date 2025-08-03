import React from 'react'
import Hero from './hero'
import Vr from './VR'
import Features from './features'
import Guide from './guide'

const page = () => {
  return (
    <div className=''>
      <Hero/>
      <Vr/>
      <Features/>
      <Guide/>
    </div>
  )
}

export default page
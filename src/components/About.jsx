import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { Tilt } from 'react-tilt'
import { service } from '../constants'
import { motion } from 'framer-motion'



const Card = ({ props }) => {

  const tiltoptions = {
    max: 50,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  return (
    <motion.div
      className='flex justify-center items-center'
      initial={{ opacity: 0, x: -100, rotateZ: -10 }}
      whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
      transition={{ duration: 0.5, ease: 'linear', delay: 0.1 }}
    >
      <Tilt className=" bg-white/5 flex justify-center items-center rounded-md h-[12rem] w-[10rem] md:h-[15rem] md:w-[12rem] border border-white/25 Tilt" options={tiltoptions}  >
        <div className="Tilt-inner">
          <div className='flex flex-col justify-center  items-center space-y-5 md:space-y-8'>
            <img src={props.icon} alt={props.title} className='w-16 h-16' />
            <h1 className='text-xs'>{props.title}</h1>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}


const About = () => {
  return (
    <Container id='about'>
      <AboutContainer>
        <div className='flex flex-col space-y-2'>
          <p className='text-secondary text-md md:text-lg xl:text-xl'>INTRODUCTION</p>
          <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>Overview.</h1>
          <p className='text-md md:text-lg xl:text-xl text-justify leading-6 md:leading-10 xl:leading-10'>
            I'm a skilled software developer with experience in
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 xl:gap-6 mt-5 md:mt-5 xl:mt-10'>
          {service.map((props, index) => (
            <Card key={index} props={props} />
          ))}
        </div>
      </AboutContainer>
    </Container>
  )
}

const Container = tw.div`
bg-background
text-primary
w-full
h-screen
pt-28
font-inter
`
const AboutContainer = tw.div`
max-w-md
md:max-w-5xl
xl:max-w-6xl
mx-auto
px-5
md:px-10
xl:px-16
2xl:px-20
h-full
`




export default About
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import TechCanvas from './TechCanvas'
import { tech } from '../constants'

const Skills = () => {

    return (
        <Container id='skills'>
            <SkillsContainer>
                <div className='flex flex-col space-y-2'>
                    <p className='text-secondary text-md md:text-lg xl:text-xl'>SKILLS</p>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>My Stack.</h1>
                </div>
                <div className='grid grid-cols-2 ml-5 md:grid-cols-3 lg:grid-cols-4 mt-10'>
                    {tech.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center space-y-2  h-32 w-32 md:h-40 md:w-40'>
                                <TechCanvas icon={item.icon} />
                            </div>
                        )
                    })}
                </div>
            </SkillsContainer>
        </Container>
    )
}


const Container = tw.div`
bg-background
text-primary
w-full
md:h-screen
pt-28
font-inter
`

const SkillsContainer = tw.div`
max-w-xl
md:max-w-5xl
xl:max-w-6xl
mx-auto
px-5
md:px-10
xl:px-16
2xl:px-20
h-full
`

export default Skills
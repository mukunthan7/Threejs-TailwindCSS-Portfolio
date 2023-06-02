import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import gsap from 'gsap'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Download } from '../assets'


const HeroContent = () => {

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "linear" } })
        tl.from('.hero_line', { y: "500", opacity: 0, duration: 0.5, stagger: 0.25 })
        tl.to('.hero_line', { y: "0", opacity: 1, duration: 1 }, "-=0.5")
        tl.from('.hero_content', { x: "100%", opacity: 0, duration: 0.5, stagger: 0.25 }, "-=1")
        tl.to('.hero_content', { x: "0", opacity: 1, duration: 1, delay: 1 })
    }, [])


    const DownloadCV = () => {
        window.open(Download, "_blank")
    }

    const HireMe = () => {
        window.open('mailto:mukunthanm079@gmail.com', "_blank")
    }

    return (
        <>
            <HeroPagecontainer>
                <Herocontentcontainer>
                    <div className='hero_line'>
                        <img src="https://mk3jswebdeveloper.web.app/static/media/Profile.28a9676806b2dfe87c7f.jpg" alt="profile" className='h-24 w-24 md:w-32 md:h-32 rounded-full border-4 border-secondary absolute top-40 left-2 md:left-[calc(8rem-1.6rem)] xl:top-40 xl:left-[calc(13rem-1.5rem)] z-20' />
                        <div className='bg-secondary h-56 md:h-76 w-1 absolute top-60 left-14 md:left-40 xl:top-64 xl:left-[calc(16rem-0.9rem)] rounded-full z-10' />
                    </div>
                    <div className='absolute top-72 left-20 md:top-80 md:left-48 xl:top-80 xl:left-72 space-y-3 md:space-y-3 hero_content'>
                        <h1 className='text-2xl md:text-4xl xl:text-4xl font-bold'> {">_"} Hi, I'm <span className='text-secondary underline'>M.Mukunthan</span></h1>
                        <p className='text-md md:text-2xl xl:text-3xl'>Hello, I'm an web developer based in <span className='text-secondary underline'>India</span></p>
                        <div className='flex justify-center items-center space-x-4 md:space-x-10 font-inter'>
                            <button onClick={HireMe} className='bg-white/5 border border-white/25 px-3 text-sm py-2 md:px-10 md:py-3 rounded-md font-bold text-secondary hover:bg-black hover:border-secondary'>Hire Me</button>
                            <button onClick={DownloadCV} className='bg-white/5 border border-white/25  px-3 text-sm py-2 md:px-10 md:py-3 rounded-md font-bold text-secondary hover:bg-black hover:border-secondary'>Download CV</button>
                            <div className='flex justify-center items-center space-y-5'>
                                <a href='#about' className='bg-secondary animate-bounce rounded-full'>
                                    <FaArrowCircleDown className='text-4xl  md:text-5xl text-primary' />
                                </a>
                            </div>
                        </div>
                    </div>
                </Herocontentcontainer>
            </HeroPagecontainer>
        </>
    )
}


const HeroPage = () => {
    return (
        <HeroContainer id='home'>
            <HeroContent />
        </HeroContainer>
    )
}

const HeroPagecontainer = tw.div`
                max-w-md
                md:max-w-4xl
                xl:max-w-6xl
                mx-auto
                px-5
                md:px-10
                xl:px-16
                2xl:px-20
                h-full
`
const Herocontentcontainer = tw.div`
relative 
-top-32
`

const HeroContainer = tw.div`
                min-h-[41vh]
                w-full
                bg-background
                text-primary
                animation
                overflow-x-hidden
                overflow-y-hidden
                `

export default HeroPage
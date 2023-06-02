import React from 'react'
import tw from 'tailwind-styled-components'
import { FaSmile } from 'react-icons/fa'
import { Socialicons } from "./SocialIcons"


const ContectCard = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-3'>
            <Socialicons />
        </div>
    )
}


const Contact = () => {
    return (
        <Container id='contact'>
            <ContactContainer>
                <div className='flex flex-col space-y-2'>
                    <p className='text-secondary text-md md:text-lg xl:text-xl'>CONTACT</p>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>Get in touch.</h1>
                    <div className='flex flex-col space-y-5'>
                        <p className='text-sm md:text-md xl:text-lg text-justify leading-6'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <div className='flex flex-row space-x-2'>
                            <a href='mailto:mukunthanm079@gmail.com' className='text-sm font-bold md:text-md xl:text-lg text-secondary bg-white/5 px-10 py-3 rounded-lg border border-white/25 hover:bg-black hover:border-secondary flex justify-center items-center space-x-2'>
                                <span>Say Hello</span>
                                <FaSmile className="text-lg" />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col pt-10 space-y-5'>
                        <p className='text-sm md:text-md xl:text-lg text-justify'>You can also find me on:</p>
                        <div className='flex items-center justify-center'>
                            <ContectCard />
                        </div>
                    </div>
                </div>
            </ContactContainer>
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
const ContactContainer = tw.div`
max-w-xl
md:max-w-5xl
xl:max-w-6xl
mx-auto
px-5
md:px-10
xl:px-16
2xl:px-20
`

export default Contact
import React from 'react'
import tw from "tailwind-styled-components"

const Footer = () => {
    return (
        <footer className='bg-background text-primary font-inter py-6 md:py-7 border-t border-primary'>
            <FooterContainer>
                <div className='text-md md:text-2xl cursor-pointer font-bold'>
                    <a href='#home' ><span className='text-secondary'>Mukunthan</span> | Portfolio</a>
                </div>
                <p className='text-xs md:text-lg text-primary'>© 2021 All Rights Reserved</p>
            </FooterContainer>
        </footer>
    )
}

const FooterContainer = tw.div`
    max-w-md mx-auto md:max-w-3xl xl:max-w-5xl px-4 md:px-0
    flex justify-between items-center
`
export default Footer
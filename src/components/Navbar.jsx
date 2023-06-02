import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri'
import { navlinks } from "../constants"
import { gsap } from 'gsap'


const NavLinksContainer = () => {

    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    active === '' && setActive(navlinks[0].title)


    const tl = gsap.timeline()
    useEffect(() => {
        tl.from('.menu', {
            duration: 0.2,
            x: -50,
            ease: 'linear',
        }).to('.menu', {
            duration: 0.2,
            x: 0,
            ease: 'linear'
        })
    }, [tl])

    return (
        <NavLinks>
            {navlinks.map((link, index) => {
                return (
                    <a key={index} href={`#${link.path}`}
                        onClick={() => setActive(link.title)}
                        className={`${active === link.title ? 'text-secondary' : ''} hidden md:flex`}
                    >
                        {link.title}
                    </a>
                )
            })}
            <div className='md:hidden text-2xl cursor-pointer'>
                <MobileMenu>
                    {toggle ? <RiCloseFill onClick={() => { setToggle(!toggle) }} /> : <RiMenu2Fill className='text-primary' onClick={() => { setToggle(!toggle) }} />}
                </MobileMenu>
                <HamMenu className={`${toggle ? 'flex' : 'hidden'}`}>
                    {navlinks.map((link, index) => {
                        return (
                            <a key={index} href={`#${link.path}`}
                                onClick={() => { setActive(link.title); setToggle(!toggle) }}
                                className={`${active === link.title ? 'text-secondary' : ''}`}
                            >
                                {link.title}
                            </a>
                        )
                    })}
                </HamMenu>
            </div>
        </NavLinks>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className='bg-background text-primary font-inter font-bold py-6 md:py-7 border-b border-primary sticky top-0 z-30'>
                <NavContainer>
                    <div className='text-xl md:text-2xl cursor-pointer'>
                        <a href='#home' ><span className='text-secondary'>Mukunthan</span> | Portfolio</a>
                    </div>
                    <NavLinksContainer />
                </NavContainer>
            </nav >
        </>
    )
}

const NavContainer = tw.div`
    max-w-md mx-auto md:max-w-3xl xl:max-w-5xl px-4 md:px-0
    flex justify-between items-center
`

const NavLinks = tw.div`
    flex space-x-4
    text-primary
    font-[300]
    uppercase
    text-md
`

const MobileMenu = tw.div`
    text-secondary
    cursor-pointer
    md:hidden
    text-4xl
`

const HamMenu = tw.div`
    absolute top-24 right-0
    flex flex-col space-y-4
    bg-background 
    border-2 border-secondary
    py-4
    px-16
    mr-4
    text-center
    rounded-md
    text-sm
    menu
    z-50
`


export default Navbar
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { useState } from 'react'
import { Tilt } from 'react-tilt';


export const Socialicons = () => {

    const [Hover, setHover] = useState("")

    const contact = [
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/mukunthan7",
            icon: FaLinkedinIn,
            color: "#0077B5",
        },
        {
            title: "GitHub",
            url: "https://www.github.com/mukunthan7",
            icon: FaGithub,
            color: "#6e5494",
        },
        {
            title: "Twitter",
            url: "https://www.twitter.com/mukunthanm13",
            icon: FaTwitter,
            color: "#1DA1F2",
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/mr_ravanan__official",
            icon: FaInstagram,
            color: "#E1306C",
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/mukunthanvisvakarma",
            icon: FaFacebookF,
            color: "#4267B2",
        },
        {
            title: "WhatsApp",
            url: "https://wa.me/919629175812",
            icon: FaWhatsapp,
            color: "#25D366",
        },
    ];

    const hoverColor = (title) => {
        switch (title) {
            case "LinkedIn":
                return "#0077B5";
            case "GitHub":
                return "#6e5494";
            case "Twitter":
                return "#1DA1F2";
            case "Instagram":
                return "#E1306C";
            case "Facebook":
                return "#4267B2";
            case "WhatsApp":
                return "#25D366";
            default:
                return "#000000";
        }
    };

    hoverColor(Hover);

    return (
        <>
            {contact.map((item, index) => (
                <Tilt>
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.title}
                        onMouseEnter={() => setHover(item.title)}
                        onMouseLeave={() => setHover("")}
                        className={`font-inter bg-white/5 text-primary h-28 w-24 md:h-36 md:w-32 rounded-lg flex flex-col items-center justify-center space-y-3`}
                        style={{ backgroundColor: Hover === item.title ? hoverColor(item.title) : "", border: Hover === item.title ? "" : `2px solid ${hoverColor(item.title)}`, color: Hover === item.title ? "" : item.color }}
                    >
                        <item.icon className="h-10 w-10 md:h-16 md:w-16" />
                        <span className='text-sm md:text-md lg:text-lg'>{item.title}</span>
                    </a >
                </Tilt>
            ))}
        </>
    );
}




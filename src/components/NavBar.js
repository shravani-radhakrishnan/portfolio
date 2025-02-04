import Link from 'next/link';
import React,{ useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';
const MotionLink = motion(Link);

const CustomLink = ({href,title,className=""})=>{
    const router = useRouter();
    return (
    <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
    </Link>
)
}
const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='w-full px-24 py-8 font-medium flex items-center justify-between'>
            <div className='absolute left-10 top-3 translate-x-[-50%]'>
                <Logo/>
            </div>
            <nav className="hidden md:flex gap-6">
                <CustomLink href='/' title="Home" className='mr-4'/>
                <CustomLink href='/about' title="About" className='mx-4'/>
                <CustomLink href='/projects' title="Projects" className='mx-4'/>
                <CustomLink href='/articles' title="Articles" className='ml-4'/>
            </nav>
            <button className="md:hidden flex flex-col space-y-1 absolute right-10" onClick={() => setIsOpen(!isOpen)}>
                <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
            <div
            className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col z-50 items-center space-y-6 p-6 md:hidden transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
            }`}>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/articles" title="Articles" />
            </div>
            <nav className="hidden md:flex">
                <MotionLink href="/" target='{_blank}' className='flex inline'
                whileHover={{y:-5}}> Book A Call 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
              </MotionLink>
            </nav>
        </header>
    );
}
export default NavBar;
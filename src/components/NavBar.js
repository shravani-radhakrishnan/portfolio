import Link from 'next/link';
import React from 'react';
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
    return (
        <header className='w-full px-24 py-8 font-medium flex items-center justify-between'>
            <div className='absolute left-10 top-3 translate-x-[-50%]'>
                <Logo/>
            </div>
            <nav>
                <CustomLink href='/' title="Home" className='mr-4'/>
                <CustomLink href='/about' title="About" className='mx-4'/>
                <CustomLink href='/projects' title="Projects" className='mx-4'/>
                <CustomLink href='/articles' title="Articles" className='ml-4'/>
            </nav>
            <nav>
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
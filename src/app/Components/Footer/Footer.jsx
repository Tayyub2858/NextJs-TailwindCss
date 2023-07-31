import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
function Footer() {
    return (
        <div className='mt-96 bg-gray-200 w-full pt-10 pb-10 '>
            <div className='md:flex justify-center '>
                <p className='text-black bg-yellow-400 p-2 text-2xl rounded-full text-center'>mk</p>
                <p className='text-black ml-3 mt-2 text-2xl '>Muheem</p>
            </div>
            <div className="md:max-lg:block md:max-sm:block m-auto text-center pt-10 pb-10">
                <Link href={'/'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>Home</Link>
                <Link href={'/about'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>About Us</Link>
                <Link href={'/services'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>Services</Link>
                <Link href={'/projects'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>Projects</Link>
                <Link href={'testinonial'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>Testimonial</Link>
                <Link href={'contact'} className='text-black ml-10 font-bold p-2 rounded hover:bg-yellow-400 hover:text-white'>Contact</Link>
            </div>
            <div className='w-full m-auto flex justify-center'>
                <AiFillFacebook className='socialmedia-icons' />
                <AiFillInstagram className='socialmedia-icons' />
                <AiFillTwitterSquare className='socialmedia-icons' />
                <AiFillLinkedin className='socialmedia-icons' />
            </div>
        </div>
    )
}

export default Footer

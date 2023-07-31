import '../../../../styles/globals.css';
import React  from 'react'; 
import Link from 'next/link';
const Navbar = () => {    
    return (
        <>
            <div className="header-navbar">
                <nav className='container mx-auto bg-slate-100 flex justify-between items-center px-4 py-4'>
                    <div className='flex gap-1 items-center text-2xl'>
                        <p className='text-black bg-yellow-400 p-2 text-2xl rounded-full'>mk</p>
                        <p className='text-black ml-3 mt-2 text-2xl '>Muheem</p>
                    </div>
                    <div className=' hidden md:flex gap-2 tracking-wider text-gray-600'>
                            <Link href={"/"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Home</Link>
                            <Link href={"/about"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>About</Link>
                            <Link href={"/services"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Services</Link>
                            <Link href={"/projects"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Projects</Link>
                            <Link href={"testinonial"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Testimonial</Link>
                            <Link href={"contact"} className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Contact</Link>
                            <Link href={""} className='ml-10 bg-yellow-400 p-2 rounded text-white hover:bg-black hover:text-white'>Download Cv</Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar

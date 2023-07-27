import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container m-auto px-5">
                <nav className='container m-auto w-full md:flex bg-white top-0 left-0 right-0 z-10 pt-5 pb-5'>
                    <div className='md:flex pl-10'>
                        <p className='text-black bg-yellow-400 p-2 text-2xl rounded-full'>mk</p>
                        <p className='text-black ml-3 mt-2 text-2xl '>Muheem</p>
                    </div>
                    <div className='m-auto'>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Home</button>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>About</button>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Services</button>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Projects</button>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Testimonial</button>
                            <button className='text-black ml-8 p-2 hover:bg-yellow-400 rounded hover:text-white'>Contact</button>
                            <button className='ml-10 bg-yellow-400 p-2 rounded text-white hover:bg-black hover:text-white'>Download Cv</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar

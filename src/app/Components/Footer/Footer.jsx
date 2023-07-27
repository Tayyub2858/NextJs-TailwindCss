import React from 'react'

function Footer() {
    return (
        <div className='mt-14 bg-gray-200 w-full pt-10 pb-10'>
            <div className='md:flex justify-center '>
                <p className='text-black bg-yellow-400 p-2 text-2xl rounded-full text-center'>mk</p>
                <p className='text-black ml-3 mt-2 text-2xl '>Muheem</p>
            </div>
            <div className="m-auto text-center pt-10 pb-10">
                <button className='text-black ml-10 font-bold '>Home</button>
                <button className='text-black ml-10 font-bold '>About Us</button>
                <button className='text-black ml-10 font-bold '>Services</button>
                <button className='text-black ml-10 font-bold '>Projects</button>
                <button className='text-black ml-10 font-bold '>Testimonial</button>
                <button className='text-black ml-10 font-bold '>Contact</button>
            </div>
        </div>
    )
}

export default Footer

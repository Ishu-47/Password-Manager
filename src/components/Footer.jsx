import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>

                <span>Pass</span>
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex'>
                Created with <img className='h-6 mx-1 pt-1' src="/heart.svg" alt="" /> by iSHU
            </div>
        </div>
    )
}

export default Footer

import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex items-center px-4 py-5 justify-between h-13">

        <div className="logo font-bold text-2xl">
        <span className='text-green-500'>&lt;</span>
          
          <span>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href='#'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>
          </li>
        </ul> */}
        <button className='text-white cursor-pointer bg-green-500 rounded-full flex justify-between items-center'>
          <img className='invert w-8 h-8 rounded-full transition-transform duration-200' src="/git.jpeg" alt="GitHub logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

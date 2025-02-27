import React from 'react';
import { assets } from '../assets/assets';
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div className=' grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-30'>
      <div className='max-w-[800px]'>
        <p className='text-[#0ff] [text-shadow:_0_0_5px_#0ff,0_0_10px_#0ff] md:text-6xl text-6xl tracking-tight'>
          Hello! I AM <br />
          <span className='text text-gray-100'>Kasun Sri Buddika</span> <br />
          <span className='text-4xl'><TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "UI | UX Designer",
              1000,
            ]}
            speed={70}
            repeat={Infinity}
            className='font-bold italic'
          /></span>
          
        </p>
        
        <h2 className='text-gray-300 text-4xl'>software engineering undergraduate</h2>
        <div className='flex flex-row gap-4 mb-4 md:mb-0'>
        <a
  href="/Kasun Fonseka.pdf" // Path to your CV file in the public folder
  download="Kasun Fonseka.pdf" // Suggested filename for the downloaded file
  className='transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold 
             text-[#39FF14] 
             border-2 border-[#39FF14]
             [text-shadow:_0_0_8px_#39FF1455]
             [box-shadow:_0_0_15px_#39FF1433]
             hover:[box-shadow:_0_0_25px_#39FF1466]
             w-1/2 mt-6 p-2 
             bg-black/80
             rounded-2xl
             transition-all
             duration-300 block text-center'
>
  Download CV
</a>
          {/* Use Link to navigate to the Portfolio component */}
          <Link to='portfolio' smooth={true} offset={50} duration={600} className='transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold 
                 text-[#00f3ff] 
                 border-2 border-[#00f3ff]
                 [text-shadow:_0_0_8px_#00f3ff]
                 [box-shadow:_0_0_15px_#00f3ff33]
                 hover:[box-shadow:_0_0_25px_#00f3ff66]
                 w-1/2 mt-6 p-2 
                 bg-black/80
                 rounded-2xl
                 transition-all
                 duration-300 block text-center'>
            My Work
          </Link>
        </div>
      </div>
      <div className="relative group">
        <img
          className='w-[200px] md:w-[370px] 
              rounded-md border border-white/30 
              transition-all duration-200
              group-hover:scale-[1.01]
              shadow-[0_0_10px_#ffffff08]
              group-hover:shadow-[0_0_15px_#0ff3]
              hover:brightness-105
              hover:contrast-110
              hover:saturate-150'
          src={assets.my2}
          alt=""
        />
        {/* Subtle gradient border */}
        <div className="absolute inset-0 rounded-md 
                pointer-events-none
                border border-transparent
                bg-gradient-to-br from-[#0ff1] via-transparent to-[#ff00ff1]
                group-hover:opacity-50 opacity-20
                transition-opacity duration-200" />
      </div>
    </div>
  );
};

export default Hero;
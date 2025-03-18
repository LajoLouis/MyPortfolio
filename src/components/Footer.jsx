import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col sm:flex-row justify-between items-center py-4 border-t border-black space-y-6 sm:space-y-0'>
        <div>
          <h1 className='font-bold text-lg'>Phone</h1>
          <p><a href='tel:+23414673350'>+234-1467-3350</a></p>
        </div>
        <div>
          <h1 className='font-bold text-lg'>Email</h1>
          <p><a href='mailto:ezeokefranklin@gmail.com'>ezeokefranklin@gmail.com</a></p>
        </div>
        <div>
          <h1 className='font-bold text-lg'>Follow me</h1>
          <div className='flex space-x-3'>
            <a href='https://github.com/LajoLouis' target='_blank' rel='noopener noreferrer'><IoLogoGithub className='text-2xl' /></a>
            <a href='https://www.linkedin.com/in/franklin-ezeoke-27327121b/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='text-2xl' /></a>
            <a href='https://x.com/Lajo_Frank?t=pqAZb5dF_MXa7TQk25cyDw&s=08' target='_blank' rel='noopener noreferrer'><FaXTwitter className='text-2xl' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

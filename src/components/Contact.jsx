import React from 'react'

function Contact() {
  return (
    <div className='min-h-screen'>
        <div className='w-[70%] mx-auto py-[30px]'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>

            <div className='border-t-[1px] border-black my-[50px]'>
                <h1 className='text-center text-2xl font-extrabold'>Send an E-mail</h1>
                <form action="" className='flex flex-col w-[50%] space-y-[20px] mx-auto border-[1px]'>
                    <input type="text" className='border-[1px] p-[10px]' placeholder='Enter E-mail'/>                
                    <input type="text" className='border-[1px] p-[10px]' placeholder='Type message'/>                
                    <input type="text" className='border-[1px] p-[10px]'/>                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
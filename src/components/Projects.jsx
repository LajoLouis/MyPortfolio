import React from 'react';

function Projects() {
  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto py-10'>
        <h1 className='text-2xl sm:text-4xl font-bold'>Projects</h1>
        <div className='mt-12 space-y-16'>
          {[
            {
              title: 'BookViaLajo',
              description: 'BookViaLajo is a hotel booking application much like Booking.com in which logged-in users can reserve and book available rooms in hotels through the application.',
              imgSrc: '/img/bookvialajo.jpg',
              link: 'https://bookvialajo.vercel.app/'
            },
            {
              title: 'MBIFEDERA',
              description: '',
              imgSrc: '/img/mbi.png',
              link: 'https://mbispace.com/'
            },
            {
              title: 'StarTech',
              description: 'StarTech is an e-commerce application based solely on the sales of shoes. Users can make orders, add to cart, and pay for them on the app, and it will be delivered to the designated location filled in by the user.',
              imgSrc: '/img/startech.jpg',
              link: 'https://startech-ecom-app-navy.vercel.app/'
            },
            {
              title: 'Simon Says',
              description: 'Simon Says is a classic memory game where players have to repeat a sequence of colors and sounds in the correct order.',
              imgSrc: '/img/simonsays.jpg',
              link: ''
            }
          ].map((project, index) => (
            <div key={index} className='flex flex-col sm:flex-row items-center sm:justify-between gap-6'>
              <div className='w-full sm:w-1/2 space-y-4'>
                <h1 className='text-xl sm:text-3xl font-bold text-yellow-600'>{project.title}</h1>
                <p className='font-light text-sm sm:text-base'>{project.description}</p>
              </div>
              <div className='w-full sm:w-1/2'>
                {project.link ? (
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <img src={project.imgSrc} alt={project.title} className='w-full rounded-lg shadow-md' />
                  </a>
                ) : (
                  <img src={project.imgSrc} alt={project.title} className='w-full rounded-lg shadow-md' />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

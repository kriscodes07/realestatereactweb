import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden ' id="Testimonials">
<h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light '>Testimonials</span></h1>
<p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real storeis from those Who found Home with Us  </p>

<div className='flex flex-wrap justify-center  align-center gap-8'>
    {testimonialsData.map((tesimonial,index)=>(
        <div  className=' max-w-85 border-gray-50 shadow-lg rounded px-8 py-12 text-center' key={index}>
            <img className='mx-auto' src={tesimonial.image} alt={tesimonial.alt} />
            <h2 className='text-xl font-medium'>{tesimonial.name}</h2>
            <p className='text-gray-500'>{tesimonial.title} </p>
            <div className='flex  gap-2 mt-2 justify-center'>
                {Array.from({length:tesimonial.rating},(item,index)=>(
                    <img src={assets.star_icon} key={index} alt="" />
                ))}
            </div>

            <p>{tesimonial.text}</p>

        </div>
    ))}
</div>



    </div>
  )
}

export default Testimonials
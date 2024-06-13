import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero_section_container'>
    <section className='hero_section grid grid-cols-1 lg:grid-cols-4'>
        <div className="text_area hidden lg:block lg:col-span-3">
            <p className='heading-1'>Host your meeting with world-class amenities. Starting at &nbsp; 
             <span className='primary-color-2'>₹199/-!</span>
            </p>
        </div>
        <div className="photo_area">
            <div className='hero_section_image' />
            <div className='hero_section_shape' />
        </div>
        <div className="text_area_2 text-center block lg:hidden ">
            <p className='heading-4'>Host your meeting with world-class amenities. Starting at &nbsp; 
             <span className='primary-color-2'>₹199/-!</span>
            </p>
        </div>
    </section>
    </section>
  ) 
}

export default HeroSection
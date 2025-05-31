import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from './../components/NewletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever is brand born out of a deep passion for timeless fashion and quality craftsmanship.
             What started as a small passion project has now grown into a trusted destination for stylish, durable, and thoughtfully curated products. 
          </p>
          <p>
          At Forever, we work tirelessly to curate a diverse selection of high-quality clothing that blends style,
           comfort, and durability. Our team carefully handpicks each piece, ensuring that every fabric, design, and
            detail meets our commitment to excellence, so our customers always get the best.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to inspire and empower individuals with timeless, high-quality fashion that blends elegance, comfort, and authenticity.
          </p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We provide meticulously crafted, high-quality products made from premium materials, ensuring durability, comfort, and timeless style.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
          Our website offers a user-friendly interface with seamless navigation, fast checkout, and a hassle-free shopping experience for ultimate convenience.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
          Our dedicated customer service team ensures prompt assistance, smooth resolutions, and a seamless shopping experience with every interaction.
          </p>
        </div>
      </div>
      <NewletterBox/>
    </div>
  )
}

export default About
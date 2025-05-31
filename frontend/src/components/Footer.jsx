import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div >
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa quidem vel nihil ratione sapiente rem. Sed, laudantium beatae? Nemo quam cum vitae debitis quos accusantium praesentium, odio aliquid impedit asperiores voluptate adipisci dolorem dolorum totam ea porro in est pariatur. Iure molestiae doloribus, commodi nisi ex sed molestias quis!
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 6909467041</li>
                    <li>contact@paulbhola1987@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
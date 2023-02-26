import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
      <Link to={"/"}>
        <div className='flex items-center gap-2 my-8'>
            <GiHotMeal className='text-3xl text-pink-500'></GiHotMeal>
            <p className='text-xl font-semibold text-gray-500'>Foodie</p>
        </div>
      </Link>
    )

}

export default Navbar
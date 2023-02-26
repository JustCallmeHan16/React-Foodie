import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'

const Details = () => {

    const {id} = useParams()
    const [meal,setMeal] = useState({})
    const getDetail = async() => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setMeal(data?.meals[0])
    }

    useEffect( () => {
        getDetail()
    },[])

    return (
        <div className='flex flex-col gap-3'>
            <img src={meal.strMealThumb} alt="" className='w-[400px] rounded-xl shadow-lg' />
            <div className='text-white bg-pink-500 w-20 text-center text-sm rounded-lg'>{meal.strCategory}</div>
            <h1 className='text-2xl font-medium'>{meal.strMeal}</h1>
            <div>
                <h2 className='text-2xl mb-2 text-gray-500'>Instruction</h2>
                <p className='tracking-wider leading-6'>{meal.strInstructions}</p>
            </div>
           <div className='flex gap-5 items-center'>
                <a href={meal.strYoutube} target="_blank">
                    <AiFillYoutube className='text-red-600 text-5xl cursor-pointer'></AiFillYoutube>
                </a>
                <p className='text-gray-500'>Watch On Youtube</p>
           </div>
        </div>
    )

}

export default Details
import React from 'react'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {

    return (
        <div className='card'>
            <img className='w-[200px] rounded-xl' src={meal.strMealThumb} alt="" />
            <h3>{meal.strMeal}</h3>
            <button className='btn'>
                <Link to={`/details/${meal.idMeal}`}>
                    <BiMessageSquareDetail className='text-xl'></BiMessageSquareDetail>
                </Link>    
            </button>
        </div>
    )

}

export default Card
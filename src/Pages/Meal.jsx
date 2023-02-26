import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import Loading from './Loading'

const Meal = () => {

    const [meals,setMeals] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const getMeals = async() => {
        const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        setMeals(data.meals)
        setIsLoading(false)
    } 

    useEffect( () => {
        getMeals()
    },[])

    return (
       <Fragment>
            {
                isLoading? <Loading></Loading> :  
                <div className='flex flex-wrap gap-3 justify-evenly py-15 my-5'>
                {
                    meals?.map( meal => <Card key={meal.idMeal} meal={meal}></Card>)
                }
            </div>
            }
       </Fragment>
    )

}

export default Meal
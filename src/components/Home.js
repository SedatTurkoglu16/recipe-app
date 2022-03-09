import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import Card from './Card'
import './Home.css'

const Home = ({ setSelectedUrl, setSelectedMeal, isAuth }) => {
  const [meals, setMeals] = useState([]);
  const [usersRecipes, setUsersRecipes] = useState([]);
  const mealsCollectionRef = collection(db, "meals")
  const usersRecipesCollectionRef = collection(db, "mealsFromUsers")

  useEffect(() => {
    onSnapshot(mealsCollectionRef, snapshot => {
      setMeals(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, [mealsCollectionRef])
  
  useEffect(() => {
    onSnapshot(usersRecipesCollectionRef, snapshot => {
      setUsersRecipes(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, [usersRecipesCollectionRef])

  return (
    <div className='section'>
      <div className='header'><h2>Popular Turkish Foods</h2></div>
      <div className="wrapper">
      {meals.map((food) => {
        return(
          <Card isAuth={isAuth} recipe={food.recipe} img={food.image} title={food.title} description={food.description} setSelectedMeal={setSelectedMeal} setSelectedUrl={setSelectedUrl} />
        )
      })}
      </div>
      {usersRecipes.map((food) => {
        return(
          <Card isAuth={isAuth} recipe={food.recipe} img={food.url} title={food.title} description={food.description} setSelectedMeal={setSelectedMeal} setSelectedUrl={setSelectedUrl} />
        )
      })}
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import Card from './Card'
import './Home.css'
import RecipesFromUsers from './RecipesFromUsers';

const Home = ({ setSelectedUrl, setSelectedMeal, isAuth }) => {
  const [meals, setMeals] = useState([]);
  const [usersRecipes, setUsersRecipes] = useState([]);
  const mealsCollectionRef = collection(db, "meals")
  const usersRecipesCollectionRef = collection(db, "mealsFromUsers")
  const user = auth.currentUser

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
      <div className='header'><h2>Recipes From You...</h2></div>
      <div className='wrapper2'>
      {usersRecipes.map((food) => {
        return(
          <RecipesFromUsers user={user} isAuth={isAuth} recipe={food.recipe} img={food.url} title={food.title} description={food.description} setSelectedMeal={setSelectedMeal} setSelectedUrl={setSelectedUrl} />
        )
      })}
      </div>
    </div>
  )
}

export default Home
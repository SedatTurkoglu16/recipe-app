import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import Card from './Card'
import './Home.css'

const Home = ({ setSelectedUrl, setSelectedMeal }) => {
  const [meals, setMeals] = useState([]);
  const mealsCollectionRef = collection(db, "meals")

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

  return (
    <div className="wrapper">
      {meals.map((food) => {
        return(
          <Card recipe={food.recipe} img={food.image} title={food.title} description={food.description} setSelectedMeal={setSelectedMeal} setSelectedUrl={setSelectedUrl} />
        )
      })}
    </div>
  )
}

export default Home
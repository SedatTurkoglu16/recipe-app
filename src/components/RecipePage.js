import React from 'react'
import './RecipePage.css'

const RecipePage = ({ selectedMeal }) => {
  return (
    <div className='container'>
      <div className='meal-details'>
        <h2>{selectedMeal.title}</h2>
        <p>{selectedMeal.recipe}</p>
      </div>
      <div className='meal-image'>
        <img src={selectedMeal.image} alt='mealImage'></img>
      </div>
    </div>
  )
}

export default RecipePage
import React, { useState } from 'react'
import icon from './heart-icon.svg'
import './RecipePage.css'

const RecipePage = ({ selectedMeal, isAuth }) => {
  const [isFav, setIsFav] = useState(null);
  return (
    <div className='container'>
      <div className='meal-details'>
        <div className='head'>
          <h2>{selectedMeal.title}</h2>
          { isAuth && <div className='fav-button2'><div className='addtofav'>Add to Favorites</div><img onClick={() => {setIsFav(!isFav)}} className={`${isFav ? 'fav-btn-active' : 'fav-btn'}`} alt='favbutton' src={icon}></img></div>}
        </div>
        <p>{selectedMeal.recipe}</p>
      </div>
      <div className='meal-image'>
        <img src={selectedMeal.image} alt='mealImage'></img>
      </div>
    </div>
  )
}

export default RecipePage
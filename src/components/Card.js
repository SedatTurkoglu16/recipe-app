import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import RecipePage from './RecipePage'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="meal_image" class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
        <Link to={`/${props.title}-recipe`} className="card__btn">View Recipe</Link>
    </div>
  )
}

export default Card
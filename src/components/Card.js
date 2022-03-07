import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const titleWithNoSpaces = props.title.replace(/ /g, "");
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="meal_image" class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
        <Link onClick={() => { props.setSelectedMeal(
            { title: props.title, 
              description: props.description, 
              recipe: props.recipe,
              image: props.img 
            })
          } 
        } to={`/${titleWithNoSpaces}-recipe`} className="card__btn">View Recipe</Link>
    </div>
  )
}
export default Card
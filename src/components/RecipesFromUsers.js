import React from 'react'
import { Link } from 'react-router-dom';
import './RecipesFromUsers.css'

const RecipesFromUsers = (props) => {
  const titleWithNoSpaces = props.title.replace(/ /g, "");

  console.log();
  return (
    <div class="post">
    <div class="post-header">
      <img src={props.img} alt="rover" />
    </div>
    <div class="post-body">
    <Link onClick={() => { props.setSelectedMeal(
            { title: props.title, 
              description: props.description, 
              recipe: props.recipe,
              image: props.img 
            })
          } 
        } to={`/${titleWithNoSpaces}-recipe`}>{props.title}</Link>
      <div class="user">
        <img src={props.author.pp_image} alt="user" />
        <div class="user-info">
          <h5>{props.author.name}</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecipesFromUsers
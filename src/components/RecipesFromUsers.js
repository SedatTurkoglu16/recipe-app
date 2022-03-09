import React from 'react'
import './RecipesFromUsers.css'

const RecipesFromUsers = (props) => {
  return (
    <div class="post">
    <div class="post-header">
      <img src={props.img} alt="rover" />
    </div>
    <div class="post-body">
      <h2>{props.title}</h2>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RecipesFromUsers
import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import './AddRecipe.css'
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const AddRecipe = ({ setUsersRecipe }) => {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [url, setUrl] = useState("");
  
  const recipeCollectionRef = collection(db, "mealsFromUsers");
  let navigate = useNavigate();
  const addRecipe = async () => {
    await addDoc(recipeCollectionRef, {
      title,
      recipe,
      url,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    })
    navigate("/");
  }
  
  return (
    <div className='createRecipePage'>
      <div className='crContainer'>
        <h1>Add Your Recipe</h1>
        <div className='inputRecipe'>
          <label> Title:</label>
          <input placeholder='Title...' onChange={(e) => {setTitle(e.target.value)}} />  
        </div>
        <div className='inputRecipe'>
          <label> Recipe:</label>
          <textarea placeholder='Recipe...' onChange={(e) => {setRecipe(e.target.value)}} />
        </div>
        <div className='inputRecipe'>
          <label> Add Image Url:</label>
          <input placeholder='Url...' onChange={(e) => {setUrl(e.target.value)}} />
        </div>
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
    </div>
  )
}

export default AddRecipe
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import './Home.css'

const Home = () => {
  const [mealLists, setMealLists] = useState([]);
  const postsCollectionRef = collection(db, "foods");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setMealLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    }
    getPosts();
  })

  return (
    <div className="wrapper">
      {mealLists.map((food) => {
        return(
          <Card recipe={food.recipe} img={food.image} title={food.title} description={food.description} />
        )
      })}
    </div>
  )
}

export default Home
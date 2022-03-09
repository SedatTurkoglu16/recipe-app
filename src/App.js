import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'
import './App.css';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import Login from './components/Login';
import RecipePage from './components/RecipePage';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({ title: '', description: '', image: '', recipe: '' });

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  const titleWithNoSpaces = selectedMeal.title.replace(/ /g, "");

  return (
    <Router>
      <nav>
        <Link to="/"><div className='brand'><h3 className='brand1'>FOOD</h3><h3 className='brand2'>DAY</h3></div></Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link> ) : ( 
          <>
            <Link to="/addRecipe"> AddRecipe </Link>
            <img onClick={signUserOut} className='profilePic' src={auth.currentUser.photoURL} alt="pp" />
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} setSelectedMeal={setSelectedMeal} />} />
        <Route path='/createpost' element={<AddRecipe isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/addRecipe' element={<AddRecipe/>} ></Route>
        <Route path={`/${titleWithNoSpaces}-recipe`} element={<RecipePage isAuth={isAuth} selectedMeal={selectedMeal} />}/>
      </Routes>
    </Router>
  );
}

export default App;

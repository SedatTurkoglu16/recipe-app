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
  const [selectedUrl, setSelectedUrl] = useState(null);

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
        <Link to="/"> <h3>Home</h3> </Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link> ) : ( 
          <>
            <Link to="/addRecipe"> AddRecipe </Link>
            <button className='signout-button' onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home setSelectedUrl={setSelectedUrl} setSelectedMeal={setSelectedMeal} />} />
        <Route path='/createpost' element={<AddRecipe isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path={`/${titleWithNoSpaces}-recipe`} element={<RecipePage selectedMeal={selectedMeal} />}/>
      </Routes>
    </Router>
  );
}

export default App;

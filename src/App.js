import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'
import './App.css';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import Login from './components/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/"> <h3>Home</h3> </Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link> ) : ( 
          <>
            <Link to="/addRecipe"> AddRecipe </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<AddRecipe isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;

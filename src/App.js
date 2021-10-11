import React, {useState} from 'react'
import MovieList from './components/MovieList'
import NavBar from './components/NavBar';
import  {MoviesData} from './components/MoviesData' 
import AddMovie from './components/AddMovie'
import Info from './components/Info'
import {Switch , Route} from "react-router-dom";
import './App.css'
const App = () => {
  const [Movies, setMovies] = useState(MoviesData)
  const [name, setName] = useState ("")
  const [ratingSearch, setRatingSearch] = useState(0)
  const Addfilm = (newmovie) => {
    return setMovies([...Movies, newmovie])
  }
  return (
    
    <div className="App">
     <Switch>
    <Route exact path ='/' render ={()=>{ 
      return( 
        <div>
    <NavBar 
    name={name} setName={setName}  
    ratingSearch={ratingSearch}  
    setRatingSearch={setRatingSearch}
    />

    <MovieList
     Movies={Movies}  
     name={name} 
      ratingSearch={ratingSearch}
      />
    <AddMovie 
    Addfilm={Addfilm}
    /> 
    </div>
      );
    
  }}
  />
    <Route path ='/info' component={Info}
      />
    </Switch>
    </div>
);
}
  export default App    

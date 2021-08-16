
import {  Route, Switch } from 'react-router-dom'
import Tv from './Tv'
import Posters from './Posters'
import Home from './Home'
import Random from './Random'
import About from './About'
import Search from './Search'
import {useState,useEffect} from 'react'
import NavBar from './NavBar'
function App() {
  const [inTheaters,setInTheaters]=useState([])
 const [tv,setTv]=useState([])
 useEffect(()=>{
   fetch('https://imdb-api.com/en/API/MostPopularTVs/k_airu9z8c')
   .then(resp=>resp.json())
   .then((resp)=>{
     setTv(resp.items)
   }) 
 
       //^^^^^^^^^ this is the api an state variable for the home page.
 
  },[])
  useEffect(()=>{
  fetch('https://imdb-api.com/en/API/InTheaters/k_airu9z8c')
  .then(resp=> resp.json())
  .then((resp)=>{setInTheaters(resp.items)})},[])

  //^^^^^^^^^^^^ this is the api and state variable for the home page.

  return (
   <> 
  
    <NavBar/>
   <Switch>
            <Route exact path='/about'>
  <About/>
            </Route>
            <Route exact path='/random'>
  <Random/>
             </Route>
             <Route exact path='/search'>
  <Search  />
             </Route>
             <Route exact path='/Tv'>
               <Tv tv={tv}/>
             </Route>
             <Route exact path='/posters'>
    <Posters inTheaters={inTheaters}/>
             </Route>
             <Route exact path='/'>
    <Home inTheaters={inTheaters}/>
             </Route>
   </Switch>
   </>
  );
}

export default App;

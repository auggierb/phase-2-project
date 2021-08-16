import {useState} from 'react'
import About from './About'
import { Route,useHistory} from 'react-router-dom'


function Search(){
    const[search,setSearch]=useState([])
    const [term,setTerm]=useState('')
   
  
    let history= useHistory()
    function handleSubmit(event){
   
        event.preventDefault()
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_airu9z8c/${term}`)
        .then(resp=>resp.json())
        .then((resp)=>{setSearch(resp.results)})
  } 
  function handleAbout(){
         
         return history.push('/about')
         
     }
     
return (
   <div>
    
    <h1>Search for Movies!</h1>
    <input onChange={(event)=>setTerm(event.target.value)} type="text"  placeholder='Search Movies...'value={term}/>

    <button onClick={handleSubmit}>Submit</button>
    <h2>results for..</h2>
  {search.map((result)=>{
      
      return <div key={result.id}>
          <h2>{result.title}</h2>
          <img src={result.image} alt='results' onClick={handleAbout}/>
          <p>{result.description}</p>
          
          
      </div>
  })}
   
   </div>

)}

export default Search

function About(){
    function handleRandom(){
        const id= Math.floor(1000000+Math.random()* 9999999)
 
         fetch(`https://imdb-api.com/en/API/Wikipedia/k_airu9z8c/tt${id}`)
    
 .then(resp=>resp.json())
   
     .then((data)=>{console.log(data)})
 }
    return(
        <>
    
        <h2>About</h2>
        <p>Welcome to my project!</p>
        <button onClick={handleRandom}>Random Movie!</button>
        { }
        </>
    )
}
export default About
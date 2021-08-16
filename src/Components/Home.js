function Display({inTheaters}){
    return(
        <><h1>In Theaters Now!!</h1>
    {inTheaters.map((item)=>{
     return  <div id='inTheaters' key={item.id}>
         <h2>{item.title}</h2>
         <img  src={item.image}alt='poster'/>
         <p>{item.releaseState}</p>
         <p></p>
         <h3>{item.plot}</h3>
         <p>{item.stars}</p>
     </div>
    })}
        </>
    )
}
export default Display
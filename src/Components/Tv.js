function Tv({tv}){
    return (
        <div>
            {tv.map((item)=>{
              return  <div key={item.id}>
                    <h1>{item.rank}</h1>
                    <h2>{item.title}</h2>
                    <img src={item.image}alt={item.fullTitle}/>
                    <p>{item.crew}</p>
                </div>
            })}
        </div>
    )}
export default Tv
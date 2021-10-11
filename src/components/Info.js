import React from 'react'

const Info = (props)=>{
  const el=  props.location.state.el;
 
  return(
    <div>
   <h1>{el.name}</h1>
   <iframe title= 'video' src={el.Trailer} />
   <p>{el.description}</p>

  </div>
  );
}
   
    
    

export default Info
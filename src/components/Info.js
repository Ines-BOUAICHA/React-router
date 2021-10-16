import React from 'react'
import {Link} from 'react-router-dom'
const styleB = {backgroundColor:'blue', color: 'white'}
const Info = (props)=>{
  const el=  props.location.state.el;
  return(
    <div>
   <h1>{el.name}</h1>
   <iframe title= 'video' src={el.Trailer} />
   <p>{el.description}</p>
   <Link to ="/"> <button variant ="primary"onClick={onclick} style= {styleB}> Go to Home</button></Link>
    </div>
  );
}
  
export default Info
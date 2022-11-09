import React from 'react'
import './Card.css'

function Card({ item }) {
  return (
    
        <div className="col-lg-3 cardmain mb-5">

    <div className="image">
    
                  <img className='imagebox' src={item.urlToImage} width="100%" style={{height:"180px"}} alt="content not available"/>
              </div>
    
    
               <div className="title"style={{overflow:"hidden"}} s>
                  <h5 className="mt-2" >{item.title}</h5>
              </div>

         <div style={{height: "100px",overflow: "hidden"}}>
              <p className='des'>{item.description}</p>
          </div>
          <div className="link" style={{height:"10px"}}>
              <a target="_blank" rel="noreferrer" href={item.url}>Read more</a>
          </div>  



           </div>
    
  )
}

export default Card
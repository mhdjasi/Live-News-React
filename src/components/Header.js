import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
        <div className="head">
  
  <h2>NEWS WORLD</h2>

<h5 className="">The Complete News Zone</h5>
</div>


<nav className="navbar navbar-expand-lg bg-dark fixed-top">

<div className="container-fluid">
<h5 style={{color:"red",cursor:"pointer"}}>News World</h5>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to={'/'} style={{ textDecoration: "none" , fontSize: "16px" }}><a href='/' className="nav-link">Top News</a></Link>
      </li>
      <li className="nav-item">
      <Link to={'/bussiness'} style={{ textDecoration: "none" , fontSize: "16px"  }}><a href='/bussiness' className="nav-link">Bussiness</a></Link>
      </li>
      <li className="nav-item">
      <Link to={'/sports'} style={{ textDecoration: "none" , fontSize: "16px" }}><a href='/sports' className="nav-link">Sports</a></Link>
      </li>
      <li className="nav-item">
      <Link to={'/health'} style={{ textDecoration: "none" , fontSize: "16px" }}><a href='/health' className="nav-link">Health</a></Link>
  
      </li>
      <li className="nav-item">
      <Link to={'/entertainment'} style={{ textDecoration: "none" , fontSize: "16px" }}><a href='/entertainment' className="nav-link">Entertainment</a></Link>

      </li>
      <li className="nav-item">
      <Link to={'/technology'} style={{ textDecoration: "none" , fontSize: "16px" }}><a href='/technology' className="nav-link">Technology</a></Link>    
      </li>
    </ul>
  </div>
</div>
</nav>

    </div>
  )
}

export default Header
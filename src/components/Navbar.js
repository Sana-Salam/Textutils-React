import React from 'react'
import { Link } from 'react-router-dom';

 const Navbar = (props) => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid"  style={{backgroundColor: 'black'}}>
    {/* <a className="navbar-brand" href="/">TextUtils</a> */}
    <a className="navbar-brand" href="#" style={{color:'white'}}>{props.title}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
         
        </li><li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">About</a>  */}
          {/* <Link className="nav-link active" aria-current="page" to="/About"  style={{color:'white'}}>{props.abouttext}</Link> */}
         
        </li>
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ></input>
        <button className="btn btn-outline-success" type="submit" style={{color:'white' , outlineColor:'white'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}


export default Navbar;



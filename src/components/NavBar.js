import React, { Component } from 'react'
// import { Link} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light"> 
            <div className="container-fluid">
               <a className="navbar-brand"  href="/">Current-News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
        <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
        <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
        <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
        <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
        <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar

import React from 'react'
// import { Link } from 'react-router-dom';



export default function Navbar(props) {

  


  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'light'?'dark' : 'light'}`} href="/">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${props.mode === 'light'?'dark' : 'light'}`} aria-current="page" href="/">Home</a>
              </li>
                <li className="nav-item">
                  <a className={`nav-link text-${props.mode === 'light'?'dark' : 'light'}`} href="/">About</a>
                </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
            </div>
          </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'String'
  };

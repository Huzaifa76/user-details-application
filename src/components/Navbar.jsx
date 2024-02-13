import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item mx-5">
        <h3 className="navbar-brand" style={{fontFamily:'cursive', fontSize: '23px', fontWeight:'bold'}}>User Dashboard</h3>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Code</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

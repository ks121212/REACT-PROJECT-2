import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // second navbar for change file path
    <div>
        <div className="container">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png" alt="banner" className=" my-3 img-fluid"/>
        </div>
        <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm ">
          <div className="container px-4 px-lg-5">
            <h4 className=" navbar-toggler">Blog Category</h4>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContents" aria-controls="navbarSupportedContents" aria-expanded="false" aria-label="Toggle nav-igation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContents">
              <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item px-3 fw-bold">
              <Link className="nav-link " to="/">All</Link></li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-bold"  to="/full-stack-development">Full-Stack Development</Link></li>
            <li className="nav-item ">
              <Link className="nav-link px-3 fw-bold"  to="/data-science">Data Science</Link></li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-bold" to="/cyber-security">Cyber Security</Link></li>
            <li className="nav-item">
              <Link className="nav-link px-3 fw-bold" to="/career">Career
        </Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        
        </div>
    </div>
  )
}

export default Navbar
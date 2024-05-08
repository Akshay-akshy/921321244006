import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-container">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">E-Retail</a>
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link " href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          
         
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header
import React from 'react';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">BitTrophy</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">My Trophy Case<span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Trophy Hall</a>
          <a className="nav-item nav-link" href="#">Sign Out</a>
        </div>
      </div>
    </nav>
  );
}

export default (Navbar);

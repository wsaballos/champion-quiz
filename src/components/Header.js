import React from 'react';

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <h1>
            {'Champion Quiz'}
          </h1>
        </div>
        <div className="row">
          <p>
            {'Select a spell associated to the Champion shown'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import React, { useState , useRef } from 'react';

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const ham = useRef(null);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="NavBar">
      <img src="./pxd.png" alt="Logo" title="Logo" />
      <button onClick={toggleHamburger}>
        <i ref={ham}> &#9776; </i>
      </button>
      <div className={`secNavBar ${isActive ? 'navActive' : 'navInactive'}`}>
        <a href="#">
          <p>Home</p>
        </a>
        <a href="/#progress">
          <p>Progress</p>
        </a>
        <Link to="/">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <img src="./pxd.png" alt="Logo" title='Logo' />
      <div>
        <a href="#"><p>Home</p></a>
        <a href="/#progress"><p>Progress</p></a>
        <Link to="/"><p>Contact</p></Link>
      </div >
    </div >
  );
}

export default NavBar;
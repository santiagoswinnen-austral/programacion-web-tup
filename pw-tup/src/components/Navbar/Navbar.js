import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (<div className="navbar">
    <Link to={'/home'}><h4 className="navbar-element">Inicio</h4></Link>
    <Link to={'/profile'}><h4 className="navbar-element">Mi Perfil</h4></Link>
    <Link to={'/courses'}><h4 className="navbar-element">Mis Cursos</h4></Link>
  </div>)
}

export default Navbar;

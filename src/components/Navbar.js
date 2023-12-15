import React from "react";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";



const Navbar = () => {
    return(
   
    <div className="row borNav">
        <div className="col-md-12 p-2">
            <nav className="navbar navbar-expand-lg navbar-light"> <Link className="navbar-brand" to="../inicio"> <img src={logo} width="150" alt="Tukysa" className="p-2"/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent pl-5">
                <ul className="navbar-nav fs15 d-flex justify-content-around w-100">
                    <li className="nav-item pl-2 pr-2"> <Link className="nav-link" to="/papers">Papers</Link> </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manejo</Link>
                        <div className="dropdown-menu p-4" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item blue" to="/posologia">Posología y dosificación</Link>
                        <Link className="dropdown-item blue" to="/reacciones">Manejo de reacciones adversas</Link>
                        <Link className="dropdown-item blue" to="/interacciones">Interacciones con otros medicamentos</Link>
                        </div>
                    </li>
                    <li className="nav-item pl-2 pr-2"> <Link className="nav-link" to="/recursos">Recursos sobre evidencia científica</Link> </li>
                    <li className="nav-item pl-2 pr-2"> <Link className="nav-link" to="/cursos">Cursos acreditados</Link> </li>
                    <li className="nav-item pl-2 pr-2 mt-1"> <Link className="menuButton" to="/servicio">Servicio de información científica</Link> </li>
                </ul>
                </div>
            </nav>
          
        </div>
    </div>
  
    )
}
export default Navbar
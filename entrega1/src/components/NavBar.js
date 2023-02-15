/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavBar.css'
import CartWidget from "./CartWidget"

function NavBar() {
    const icon_style = {
        marginLeft: '10px'
    }
    return (
        <div className="navbar_wrapper">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href={ '/' }>
                    <FontAwesomeIcon icon={'skull-crossbones'} />
                    <span style={icon_style}>Oasis Viajes</span>
                </a>
                <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={ '/' }>Productos</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Categorias
                            </a>
                            <div className="dropdown-menu">
                                <Link className="nav-link" to={ '/' }>Todas</Link>
                                <Link className="nav-link" to={ '/categoria/bosque' }>Bosque</Link>
                                <Link className="nav-link" to={ '/categoria/playa' }>Playa</Link>
                                <Link className="nav-link" to={ '/categoria/valle' }>Valle</Link>
                            </div>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
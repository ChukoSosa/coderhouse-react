/* eslint-disable jsx-a11y/anchor-is-valid */
import './NavBar.css'
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar_wrapper">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href={ '/' }>Oasis Viajes</a>
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
                                <Link className="nav-link" to={ '/categoria/:categoryId' }>Bosque</Link>
                                <Link className="nav-link" to={ '/categoria/:categoryId' }>Playa</Link>
                                <Link className="nav-link" to={ '/categoria/:categoryId' }>Valle</Link>
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
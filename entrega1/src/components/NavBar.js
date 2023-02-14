import './NavBar.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar_custom_class">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href={ '/' }>Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={ '/' }>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={ '/productos' }>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={ '/nosotros' }>Nosotros</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
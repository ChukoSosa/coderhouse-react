import './NavBar.css';
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div className="navbar_custom_class">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Producto 1</a>
                                <a className="dropdown-item" href="#">Producto 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Otros</a>
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
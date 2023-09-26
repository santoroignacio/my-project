import { NavLink } from "react-router-dom"


export const Navbar: React.FC = () => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Inicio</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/createProductPage">Agregar Producto</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
import "../style/Header.scss";
import logoHeader from "../assets/logos/logoHeader.svg";
import { NavLink } from "react-router-dom";
export default function Header () {
    return (
        <header className="header flex mainSize">
            <h1><img src={logoHeader} alt="Logo du site Kasa" /></h1>
            <nav>
                <ul className="navBarUl flex">
                    <li>
                       <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">À Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
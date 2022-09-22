import CartWidget from './CartWidget';
import Logo2 from './Logo2.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <div class="nav-wrapper">
                <NavLink to= '/'><img className="logo" src={Logo2} alt=""/></NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to='/category/Yamaha'>Yamaha</NavLink></li>
                    <li><NavLink to='/category/Honda'>Honda</NavLink></li>
                    <li><NavLink to='/category/KTM'>KTM</NavLink></li>
                    <li><a href="sass.html">Quienes Somos</a></li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
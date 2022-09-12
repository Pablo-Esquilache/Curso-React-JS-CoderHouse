import CartWidget from './CartWidget';
import Logo2 from './Logo2.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: "#00acc1" }}>
            <div class="nav-wrapper">
                <NavLink to= '/'><img src={Logo2} alt="" style={{ width: 70 }}/></NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down" style={{ marginRight: 20, fontSize: 20 }}>
                    <li><NavLink to='/category/Yamaha'>Yamaha</NavLink></li>
                    <li><NavLink to='/category/Honda'>Honda</NavLink></li>
                    <li><NavLink to='/category/KTM'>KTM</NavLink></li>
                    <li><a href="sass.html">Quienes Somos</a></li>
                    <li><a href="badges.html">Nuestros Productos</a></li>
                    <li><CartWidget/> 0</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
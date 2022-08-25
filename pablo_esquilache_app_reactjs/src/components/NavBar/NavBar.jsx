import CartWidget from './CartWidget';
import Logo2 from './Logo2.png';
const NavBar = () => {
    return (
        <nav style={{ backgroundColor: "#00acc1" }}>
            <div class="nav-wrapper">
            <img src={Logo2} alt="" style={{width:70}}/>
                <ul id="nav-mobile" class="right hide-on-med-and-down" style={{ marginRight: 20, fontSize: 20 }}>
                    <li><a href="sass.html">Quienes Somos</a></li>
                    <li><a href="badges.html">Nuestros Productos</a></li>
                    <li><CartWidget /> 0</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
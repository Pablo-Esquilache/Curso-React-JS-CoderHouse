import Element from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: "#00acc1" }}>
            <div class="nav-wrapper">
                <a href="index.html" class="brand-logo center">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down" style={{ marginRight: 20, fontSize: 20 }}>
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    <li><Element /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
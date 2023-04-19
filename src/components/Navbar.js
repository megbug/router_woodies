import { Link } from 'react-router-dom'
import logo from '../img/Logo.png'

const Navbar = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' />
            <nav className='nav'>
                <Link to='/router_woodies/'>Home</Link>
                <Link to='/router_woodies/about-us'>About us</Link>
                <Link to='/router_woodies/products'>Products</Link>
            </nav>
        </header>
    );
}

export default Navbar;
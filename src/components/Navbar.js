import { Link } from 'react-router-dom'
import logo from '../img/Logo.png'

const Navbar = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' />
            <nav className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About us</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </header>
    );
}

export default Navbar;
import logo from '../img/Logo.png'
import footerImg from '../img/Footer.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContact'>
                <img src={logo} alt='logo' />
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
            </div>
            <p className='company'>© 2020 WOODIES</p>
            <img src={footerImg} alt='desk' />
        </footer>
    );
}

export default Footer;
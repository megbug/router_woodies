import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import homeImg from '../img/Home.png'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Navbar />
            <section className='homeSection'>
                <div className='homeSectionText'>
                    <h3>Are you looking for <span>wooden furniture</span> for your place?</h3>
                    <h2>This is the Right Place</h2>
                    <Link to='/router_woodies/products'>Explore Products</Link>
                </div>
                <img src={homeImg} alt='coffeetable' />
            </section>
        </div>
    );
}

export default HomePage;
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import table from "../img/Tisch.png";
import chair from "../img/Stuhl.png";
import bowls from "../img/Schuesseln.png";
import { Link } from "react-router-dom";
import flower from "../img/Group 28.svg"

const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="titlePages">
                    <img src={flower} alt='logo-img' />
                    <h3>What we have<span>PRODUCTS</span></h3>
                </div>
                <article className="articleGrid">
                    <div>
                        <h4>Jenson</h4>
                        <img src={table} alt='table' />
                        <Link to='/router_woodies/product/jenson'>Shop Now</Link>
                    </div>
                    <div>
                        <h4>Deon</h4>
                        <img src={chair} alt='chair' />
                        <Link to='/router_woodies/product/deon'>Shop Now</Link>
                    </div>
                    <div>
                        <h4>Krisha</h4>
                        <img src={bowls} alt='bowls' />
                        <Link to='/router_woodies/product/krisha'>Shop Now</Link>
                    </div>
                </article>
            </section>
            <Footer />
        </div>
    );
}

export default ProductsPage;
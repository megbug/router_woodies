import Navbar from "../components/Navbar";
import table from "../img/Tisch.png";
import chair from "../img/Stuhl.png";
import bowls from "../img/Schuesseln.png";
import Footer from "../components/Footer";
import flower from "../img/Group 28.svg";

const ProductPage = (props) => {
    console.log(props.product);

    if (props.product === 'jenson') {
        return (
            <div className="productPage">
                <Navbar />
                <div className="title">
                    <img src={flower} alt='logo-img' />
                    <h3>Jenson <span>PRODUCTS</span></h3>
                </div>
                <div className="midSection">
                    <img src={table} alt='table' />
                    <p>Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>
                </div>
                <Footer />
            </div>
        )
    }
    else if (props.product === 'deon') {
        return (
            <div className="productPage">
                <Navbar />
                <div className="title">
                    <img src={flower} alt='logo-img' />
                    <h3>Deon <span>PRODUCTS</span></h3>
                </div>
                <div className="midSection">
                    <img src={chair} alt='chair' />
                    <p>Deon demonstrates what designer Jim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>
                </div>
                <Footer />
            </div>
        );
    }
    else {
        return (
            <div className="productPage">
                <Navbar />
                <div className="title">
                    <img src={flower} alt='logo-img' />
                    <h3>Krisha <span>PRODUCTS</span></h3>
                </div>
                <div className="midSection">
                    <img src={bowls} alt='bowls' />
                    <p>Krisha demonstrates what designer Fin Temnby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>
                </div>
                <Footer />
            </div>
        );
    }


}

export default ProductPage;
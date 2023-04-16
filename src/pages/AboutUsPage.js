import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from '../img/About.png';
import flower from "../img/Group 28.svg"


const AboutUsPage = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className="titlePages">
                    <img src={flower} alt='logo-img' />
                    <h3>Who we are<span>ABOUT US</span></h3>
                </div>
                <article className='aboutSection'>
                    <img src={aboutImg} alt='salat' />
                    <div className='aboutSectionText'>
                        <h2><span>WOODIES</span> is the <span>home of modern wooden furniture</span></h2>
                        <h3>the answer to your need for furniture with shapes, sizes and colors.</h3>
                    </div>
                </article>
            </section>
            <Footer />
        </div >
    );
}

export default AboutUsPage;
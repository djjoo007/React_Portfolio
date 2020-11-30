import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render() {
        return(
            <div>
            <header>
                <div className="logo">
                    <a href="#home"><img src="img/joologo.png"/></a>
                    {/* <!-- <img src="img/joologo.png" alt=""> --> */}
                </div>
                <button className="nav-toggle" aria-label="toggle navigation">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">My Information</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">My Portfolio</a></li>
                    </ul>
                </nav>
            </header>
            
        
            {/* <!-- Introduction --> */}
                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Hi, I am <strong>Joo Heredia</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">Full Stack Web Developer</p>
                    <img src="img/devjoo.jpg" alt="portfolio picture" className="intro__img"></img>
                </section>
                
        
            {/* <!-- My Information --> */}
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services">My Information</h2>
                <div className="services">
                    <div className="service">
                        <h3>Email</h3>
                        <a href="mailto: jooheredia@email.com"  className="my-service-p-link">jooheredia@gmail.com</a>
                    </div>
        
                    <div className="service">
                        <h3>Website</h3>
                        <a href="https://djjoo007.github.io/"  className="my-service-p-link">djjoo007.github.io</a>
                    </div>
        
                    <div className="service">
                        <h3>Phone Number</h3>
                        <a href="tel: 9729035950"  className="my-service-p-link">972-903-5950</a>
                    </div>
        
                </div>
                <a href="#work" className="btn">My Portfolio</a>
                <a href="img/Joo Heredia Resume.pdf" className="btn">My Resume</a>
            </section>
        
            {/* <!-- About Me --> */}
            <section className="about-me" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Developer based out of Seattle</p>
        
                <div className="about-me__body">
                    <p className="about-me-p">Front-end web developer leveraging telecommunications and networking background to build a more intuitive user experience on the web. Recently earned a certificate in full stack development from the University of Washington with newly developed skills in JavaScript, CSS, React.js, and responsive web design.</p>
                    <p className="about-me-p">Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. Offering diverse business and technical experience facilitating a broad range of company and customer initiatives: combines strong planning, organizational and communications skills with the ability to ensure smooth flow of daily operations within a fast-paced and changing environment. Facilitate a team work environment to increase productivity and enhance employee morale.</p>
                </div>
        
                <img src="img/tulips.jpg" alt="another portfolio picture" className="about-me__img"></img>
            </section>
        
                    {/* <!-- My Portfolio --> */}
            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My Portfolio</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                <p className="section__subtitle section__subtitle--work">Click the picture to get detailed information</p>
                
                <div className="portfolio">
                    {/* <!-- Portfolio item 01 --> */}
                    <Link to="/portfolio" className="portfolio__item">
                        <img src="img/burger.png" alt="" className="portfolio__img"></img>
                    </Link>
                               
                    {/* <!-- Portfolio item 03 --> */}
                    <Link to="/portfolio3" className="portfolio__item">
                        <img src="img/fitnesstracker.png" alt="" className="portfolio__img"></img>
                    </Link>
                    
                    {/* <!-- Portfolio item 04 --> */}
                    <Link to="/portfolio4" className="portfolio__item">
                        <img src="img/budget.png" alt="" className="portfolio__img"></img>
                    </Link>
        
                    {/* <!-- Portfolio item 02 --> */}
                    <Link to="/portfolio2" className="portfolio__item">
                        <img src="img/vent.png" alt="" className="portfolio__img"></img>
                    </Link>
                </div>
            </section>
        
            {/* <!-- Footer --> */}
            <footer class="footer">
                <a href="mailto: jooheredia@email.com"  class="footer__link">jooheredia@gmail.com</a>
                <ul class="social-list">
                    <li class="social-list__item"><a class="social-list__link" href="https://github.com/djjoo007"><i class="fab fa-github"></i></a>
                    </li>
                    <li class="social-list__item"><a class="social-list__link" href="https://www.linkedin.com/in/joo-heredia/"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </footer>
        
                <script src="js/index.js"></script>
        </div>

        )
    }
}

export default Home;
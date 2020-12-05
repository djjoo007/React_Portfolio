import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar.js';

class Portfolio2 extends Component{
    render() {
        return(
<div>
    <header>
        <div class="logo">
        <Link to="/"><img src="img/joologo.png"/></Link>
            {/* <!-- <img src="img/joologo.png" alt=""> --> */}
        </div>
        {/* <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}>
        </Sidebar> */}
        <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><Link to="/" class="nav__link">Home</Link></li>
                <li class="nav__item"><a href="index.html#services" class="nav__link">My Information</a></li>
                <li class="nav__item"><a href="index.html#about" class="nav__link">About me</a></li>
                <li class="nav__item"><a href="index.html#work" class="nav__link">My Portfolio</a></li>
            </ul>
        </nav>
    </header>

    <section class="intro">
        <h1 class="section__title section__title--intro">
            <strong>Group Collaboration Project</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Vent 
            Air Quality App</p>
        <img src="img/vent.png" alt="" class="intro__img"></img>
    </section>
    
    <div class="portfolio-item-individual">
        <p class="portfolio_text">This application was created as a collaborative effect with three other This application will use an express backend and save and retrieve note data from a JSON file.</p>

        <p class="portfolio_text">This application utilizes JavaScript, MySQL, HTML5, CSS3, Handlebars, MVC, ORM, Node.js</p>

        <ul class="portfolio_link">
            <li>
                <a href="https://djjoo007.github.io/Vent/">Link to GitHub</a>
            </li>
            <li>
                <a href="https://vent-airquality-tracker.herokuapp.com/">Link to Heroku</a>
            </li>
        </ul>
        <img src="img/vent.png" alt=""></img>
        

    </div>
            
    {/* <!-- Footer --> */}
    <footer class="footer">
        <a href="mailto: jooheredia@email.com" class="footer__link">jooheredia@gmail.com</a>
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
export default Portfolio2;
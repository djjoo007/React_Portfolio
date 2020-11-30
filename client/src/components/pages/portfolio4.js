import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio4 extends Component{
    render() {
        return(
<div>
    <header>
        <div class="logo">
        <Link to="/"><img src="img/joologo.png"/></Link>
            {/* <!-- <img src="img/joologo.png" alt=""> --> */}
        </div>
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
            <strong>Progress Web Apps</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Online/Offline Budget Tracker</p>
        <img src="img/budget.png" alt="" class="intro__img"></img>
    </section>
    
    <div class="portfolio-item-individual">
        <p class="portfolio_text">This Budget Tracker App allows offline access and functionality.

            The user will be able to add expenses and deposits to their budget with or without a network connection. All transactions what was entered offline will populate and update the total when brought back online.</p>

        <p class="portfolio_text">This application utilizes Web App Manifest, Service Worker, NoSQL, MongoDB, MongoDB Atlas, Node.js</p>

        <ul class="portfolio_link">
            <li>
                <a href="https://github.com/djjoo007/Budget_Tracker_PWA.git">Link to GitHub</a>
            </li>
            <li>
                <a href="https://stormy-ravine-99046.herokuapp.com/">Link to Heroku</a>
            </li>
        </ul>
        <img src="img/budget.png" alt=""></img>

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
export default Portfolio4;
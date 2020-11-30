import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component{
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
            <strong>Node Express Handlebars</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Burger App</p>
        <img src="img/burger.png" alt="" class="intro__img"></img>
    </section>
    
    <div class="portfolio-item-individual">
        <p class="portfolio_text">This application is a burger logger. One side will show Burgers ready to be eaten and the other side will show Burgers that have been devoured. This applications allows users to move burgers from the Devoured column to Ready To Be Eaten column and vice versa. Users can add a burger which will be added to the Ready to Eat column. Users can either devour the burger or delete the burger at anytime.</p>
        <p class="portfolio_text">This application utilizes Template Engines, Handlebars, MVC, MySQL, Node, Express and Heroku with JAWSdb add-on</p>

        <ul class="portfolio_link">
            <li>
                <a href="https://github.com/djjoo007/Burger.git">Link to GitHub</a>
            </li>
            <li>
                <a href="https://quiet-atoll-23729.herokuapp.com/">Link to Heroku</a>
            </li>
        </ul>
        <img src="img/burger.png" alt=""></img>
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

export default Portfolio;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar.js';

class Portfolio3 extends Component{
    render() {
        return(
<div>
    <header>
        <div class="logo">
        <Link to="/"><img src="img/joologo.png"/></Link>
            {/* <!-- <img src="img/joologo.png" alt=""> --> */}
        </div>
        <Sidebar
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}>
        </Sidebar>
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
            <strong>No SQL - MongoDB</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Workout Tracker</p>
        <img src="img/fitnesstracker.png" alt="" class="intro__img"></img>
    </section>
    
    <div class="portfolio-item-individual">
        <p class="portfolio_text">This application is a Workout Tracker.
            When the user loads the page, users are given the option to create a new workout or continue with their last workout.
            The user are able to add exercises to a previous workout plan.  Add new exercises to a new workout plan.  View the combined weight of multiple exercises on the stats page.</p>

            <p class="portfolio_text">This application utilizes NoSQL, MongoDB, Object-document mapping, Mongoose.js, CRUD, Node.js</p>

        <ul class="portfolio_link">
            <li>
                <a href="https://github.com/djjoo007/Workout_Tracker.git">Link to GitHub</a>
            </li>
            <li>
                <a href="https://calm-bastion-11804.herokuapp.com/">Link to Heroku</a>
            </li>
        </ul>
        <img src="img/fitnesstracker.png" alt=""></img>

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
export default Portfolio3;

import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

  return (
    <Menu>

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

    </Menu>
  );
}
}


export default Sidebar;

import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../helper/Context';

const Navbar = () => {

    const toggleBurger = () => {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        //toggle nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`;
            }
            //delay times
            console.log(index / 7 + 0.2);
        });
        //Burger animation
        burger.classList.toggle("toggle");
    }

    const hideNav = () => {
        const nav = document.querySelector(".nav-links");
        const burger = document.querySelector(".burger");
        const navLinks = document.querySelectorAll(".nav-links li");

        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`;
          }
          //delay times
          console.log(index / 7 + 0.2);
        });
        burger.classList.toggle("toggle");
        
  }
  
  const{isAdmin} = useContext(Context)

    return (
      <nav>
        <div className="logo">
          {/* <h4>The nav</h4> */}
          <img src="/images/FUNUHA.png" alt="" className="img_logo" />
          <div className="title">
            <span className="title_nutriendo">Nutriendo</span>
            <span className="title_habitos">hábitos</span>
          </div>
        </div>
        <ul className="nav-links" onClick={hideNav}>
          <li>
            <Link to="/" className="a_tag">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="a_tag">
              About
            </a>
          </li>
          <li>
            {/* <a href="#">Work</a> */}
            <Link to="/articles" className="a_tag">
              Articles
            </Link>
          </li>
          {isAdmin && (
            <li>
              {/* <a href="#">Work</a> */}
              <Link to="/articles/create" className="a_tag">
                Create Articles
              </Link>
            </li>
          )}
          <li>
            <a href="#" className="a_tag">
              Our Project
            </a>
          </li>
          <li>
            <Link to="/auth" className="a_tag">
              Sign In
            </Link>
          </li>
        </ul>
        <div className="burger" onClick={toggleBurger}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    );
}

export default Navbar

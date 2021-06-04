import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../helper/Context';


const Navbar = () => {

    const toggleBurger = () => {

        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");
      const slider = document.querySelector(".carousel_main");
      const mobil = document.querySelector(".mobileCarousel");
      const screen = document.querySelector('html')

      screen.classList.toggle('flow')
      
        //toggle nav
      if (mobil) {
        mobil.classList.toggle('slider-active')
      }
      if (slider) {
        slider.classList.toggle('slider-active')
      }
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

  const hideCarousel = () => {
    const slider = document.querySelector(".carousel_main");
    const screen = document.querySelector("html");

    //toggle nav
    if (slider) {
      slider.classList.remove("slider-active");
    }
    screen.classList.remove("flow");
  }
  

    return (
      <nav className="themainnav">
        <div className="logo">
          {/* <h4>The nav</h4> */}
          <a href="/">
            <img src="/images/FUNUHA.png" alt="" className="img_logo" />
          </a>
          <div className="title">
            <span className="title_nutriendo">Nutriendo</span>
            <span className="title_habitos">hábitos</span>
          </div>
        </div>
        <ul className="nav-links" onClick={hideNav}>
          <li>
            <Link to="/" className="a_tag" onClick={hideCarousel}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/articulos" className="a_tag" onClick={hideCarousel}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/recetas" className="a_tag" onClick={hideCarousel}>
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/achivements" className="a_tag" onClick={hideCarousel}>
              Achievements
            </Link>
          </li>
          {/* <li>
            <Link href="/#about_page" className="a_tag">
              Nosotros
            </Link>
          </li> */}
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

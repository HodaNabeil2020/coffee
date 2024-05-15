import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../style/header.css";
function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  const [navOpen, setNavOpen] = useState(false);
  const [activeLinkes, setActiveLinks] = useState("Home");

  const navRef =useRef();

  useEffect(() => {
    const handleClikOutSide = (e) => {
      if (navOpen) {
        if (!e.target.closest(".nav-links") && !e.target.closest(".mobile-icon")) {
          setNavOpen(false);
        
        }
      }
    
    };
    window.addEventListener("click", handleClikOutSide);
    return () => {
      window.removeEventListener("click", handleClikOutSide);
    };
  }, [navOpen]);
  

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  function hundleActiveLiks(link) {
    setActiveLinks(link);
  }
  function Toggle() {
    setNavOpen((navOpen) => !navOpen);
  }

  return (
    <nav 
      className=" flex  items-center  ">
      <ul ref={navRef}
        className={`nav-links 
        ${
          navOpen === true ? "show" : " hide"
        }
        
        `
      }
      >
        <li
          onClick={() => {
            hundleActiveLiks("Home");
          }}
        >
          <Link
            className={` nav-link ${activeLinkes === "Home" ? "active" : " "}`}
            to={"/home"}
          >
            Home
          </Link>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link
            className={` nav-link ${
              activeLinkes === "Coffe" || activeLinkes === "Dessert"
                ? "active"
                : " "
            }`}
            to={"/menu"}
          >
            Menu
          </Link>
        </li>
        <ul
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={` z-[50] menu-container    ${
            isVisible ? " block " : " hidden"
          }`}
        >
          <li
            onClick={() => {
              hundleActiveLiks("Coffe");
            }}
          >
            <Link
              className={` menu   nav-link ${
                activeLinkes === "Coffe" ? "active" : " "
              }`}
              to={"/menu"}
            >
              Coffe
            </Link>
          </li>
          <li
            onClick={() => {
              hundleActiveLiks("Dessert");
            }}
          >
            <Link 
                    className={` menu nav-link ${
                      activeLinkes === "Dessert" ? "active" : " "
                    }`}
            to="/dessert">Dessert</Link>
          </li>
        </ul>
        <li
          onClick={() => {
            hundleActiveLiks("Contact");
          }}
        >
          <Link
            className={` nav-link ${
              activeLinkes === "Contact" ? "active" : " "
            }`}
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li
          onClick={() => {
            hundleActiveLiks("About");
          }}
        >
          <Link
            className={` nav-link ${activeLinkes === "About" ? "active" : " "}`}
            to={"/about"}
          >
            About
          </Link>
        </li>
      </ul>
    <div>
    <div  className=" btn-toggle" onClick={Toggle}>
        <i
          className={`mobile-icon fa-solid ${
             navOpen === true ?  " fa-xmark":"  fa-bars" 
          }`}
        ></i>
      </div>
    </div>
    </nav>
  );
}

export default Nav;

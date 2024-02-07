import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const [isHiden, setIsHiden] = useState(false);
  useEffect(() => {
    const handleBodyClass = () => {
      if (isHiden) {
        document.body.classList.add("_hidden");
      } else {
        document.body.classList.remove("_hidden");
      }
    };
    handleBodyClass();
    return () => {
      document.body.classList.remove("_hidden");
    };
  }, [isHiden]);

  const [isPlugOn, setIsPlugOn] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = document.documentElement.clientHeight;
      const minHeight = 700;
      setIsPlugOn(screenHeight >= minHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`header ${isPlugOn ? "fixed-header" : ""}`}>
        <div className="header__container">
          <NavLink
            className={(navData) => (navData.isActive ? "is-active" : "none")}
            to="/"
          >
            <div className="header__logo">
              <Logo myProp="header-logo" />
            </div>
          </NavLink>

          <div className="header__links-container">
            <div
              onClick={() => setIsHiden(false)}
              className={`header__backdrop ${isHiden ? "_active" : ""}`}
            ></div>

            <div className={`header__menu ${isHiden ? "_active" : ""}`}>
              <div className="header__logo-menu">
                <Logo myProp="menu-logo" />
              </div>

              <ul className="header__ul">
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/"
                    onClick={() => setIsHiden(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/careers"
                    onClick={() => setIsHiden(false)}
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/blog"
                    onClick={() => setIsHiden(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "is-active" : "none"
                    }
                    to="/about"
                    onClick={() => setIsHiden(false)}
                  >
                    About
                  </NavLink>
                </li>
              </ul>

              <div className="header__btns">
                <Link to="/login">
                  <div
                    className="btn header__btn-login"
                    onClick={() => setIsHiden(false)}
                  >
                    Login
                  </div>{" "}
                </Link>
                <Link to="/signin">
                  <div
                    className="btn header__btn-sign"
                    onClick={() => setIsHiden(false)}
                  >
                    Sign Up
                  </div>
                </Link>
              </div>
              <span
                className="material-icons icon-close"
                onClick={() => setIsHiden(false)}
              >
                close
              </span>
            </div>
          </div>

          <span
            className="material-icons icon-menu"
            onClick={() => setIsHiden(true)}
          >
            menu
          </span>
        </div>
      </header>
      <div
        className={`header__plug ${isPlugOn ? "header__plug-on" : ""}`}
      ></div>
    </>
  );
};

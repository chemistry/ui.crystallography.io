import * as React from "react";
import "./index.scss";
// import { NavLink } from "react-router-dom";
import { LogoIcon, TitleIcon } from "../../icons";
import { NavMenuTop } from "../nav-menu";


/*

          <NavLink to="/" exact strict className="app-navigation-header-logo">
              <div className="app-navigation-header__logo-icon">
                <LogoIcon />
              </div>
              <div className="app-navigation-header__logo-title">
                <TitleIcon />
              </div>
          </NavLink>

*/
export const AppNavigation = () => {
   return (
     <>
       <header className="app-navigation-header">

          <div className="app-navigation-header-menu-top">
              <NavMenuTop />
          </div>
          {
              /*
                <div className="app-navigation-header-menu-bottom">
                    <NavMenuBottom />
                </div>
            */
          }
       </header>
      </>
    );
};

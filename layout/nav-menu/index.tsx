import * as React from "react";
// import { NavLink } from "react-router-dom";
import "./index.scss";
/*import {
  MenuAuthorsIcon, MenuCatalogIcon, MenuInfoIcon, MenuNewsIcon, MenuSearchIcon,
  SignInIcon,
} from "../../icons";
*/

export const NavMenuBottom = ({ onClick }: { onClick?: () => void }) => {
    return (<div className="nav-menu">
        <ul className="nav-menu-list">
          <li>
          </li>
        </ul>
    </div>);
};
/*
    <NavLink to="/login" strict className="nav-menu-item" activeClassName="active" onClick={onClick}>
        <div className="nav-menu-item__icon"><SignInIcon /></div>
        <div className="nav-menu-item__title">Login</div>
    </NavLink>
*/

export const NavMenuTop = ({ onClick }: { onClick?: () => void }) => {
    /*
        <li>
            <NavLink to="/search-history" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                <div className="nav-menu-item__icon"><SearchHistoryIcon /></div>
                <div className="nav-menu-item__title">Search History</div>
            </NavLink>
        </li>
    */
    return (<div>Hello</div>
        /*
        <div className="nav-menu">
            <ul className="nav-menu-list">
            <li>
                <NavLink to="/" exact strict className="nav-menu-item" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><MenuSearchIcon /></div>
                    <div className="nav-menu-item__title">Search Structure</div>
                </NavLink>
            </li>

            <li>
                <NavLink to="/authors" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><MenuAuthorsIcon /></div>
                    <div className="nav-menu-item__title">Authors</div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/catalog" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><MenuCatalogIcon /></div>
                    <div className="nav-menu-item__title">Catalog</div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><MenuInfoIcon /></div>
                    <div className="nav-menu-item__title">About Us</div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/news" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><MenuNewsIcon /></div>
                    <div className="nav-menu-item__title">Updates</div>
                </NavLink>
            </li>
            </ul>
        </div>
    */
    );
};

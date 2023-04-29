import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import {
  MenuAuthorsIcon, MenuCatalogIcon, MenuInfoIcon, MenuNewsIcon, MenuSearchIcon,
  SignInIcon,
} from "../../icons";

const NavLink = withRouter( (({ router, children, ...props }: any) => {
    const { to, activeClassName, className, ...rest } = props;
    const href = props.to || '';
    const isActive = router.pathname === href && activeClassName;
    const newClassName = isActive ? `${className} ${activeClassName}` : className || '';

    return <Link legacyBehavior href={href}><a className={newClassName} {...rest}>{children}</a></Link>;
}));

export const NavMenuBottom = ({ onClick }: { onClick?: () => void }) => {
    return (<div className="nav-menu">
        <ul className="nav-menu-list">
            <li>
                <NavLink to="/login" strict="true" className="nav-menu-item" data-e2e="login" activeClassName="active" onClick={onClick}>
                    <div className="nav-menu-item__icon"><SignInIcon /></div>
                    <div className="nav-menu-item__title">Login</div>
                </NavLink>
            </li>
        </ul>
    </div>);
};

export const NavMenuTop = ({ onClick }: { onClick?: () => void }) => {
    return (

        <div className="nav-menu">
            <ul className="nav-menu-list">
                <li>
                        <NavLink to="/" exact="true" strict="true" data-e2e="index" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                            <div className="nav-menu-item__icon"><MenuSearchIcon /></div>
                            <div className="nav-menu-item__title">Search Structure</div>
                        </NavLink>
                </li>
                {
                    /*
                        <li>
                            <NavLink to="/search-history" className="nav-menu-item" activeClassName="active" onClick={onClick}>
                                <div className="nav-menu-item__icon"><SearchHistoryIcon /></div>
                                <div className="nav-menu-item__title">Search History</div>
                            </NavLink>
                        </li>
                    */
                }
                <li>
                    <NavLink to="/authors" className="nav-menu-item" data-e2e="authors" activeClassName="active" onClick={onClick}>
                        <div className="nav-menu-item__icon"><MenuAuthorsIcon /></div>
                        <div className="nav-menu-item__title">Authors</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" className="nav-menu-item" data-e2e="catalog" activeClassName="active" onClick={onClick}>
                        <div className="nav-menu-item__icon"><MenuCatalogIcon /></div>
                        <div className="nav-menu-item__title">Catalog</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-menu-item" data-e2e="about" activeClassName="active" onClick={onClick}>
                        <div className="nav-menu-item__icon"><MenuInfoIcon /></div>
                        <div className="nav-menu-item__title">About Us</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className="nav-menu-item" data-e2e="news" activeClassName="active" onClick={onClick}>
                        <div className="nav-menu-item__icon"><MenuNewsIcon /></div>
                        <div className="nav-menu-item__title">Updates</div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

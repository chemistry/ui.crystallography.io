import * as React from "react";
import { withRouter } from 'next/router';
import Link from 'next/link';
import { LogoIcon, TitleIcon } from "../../icons";
import { NavMenuBottom, NavMenuTop } from "../nav-menu";

const NavLink = withRouter( (({ router, children, ...props }: any) => {
    const { to, activeClassName, className, ...rest } = props;
    const href = props.to || '';
    const isActive = router.pathname === href && activeClassName;
    const newClassName = isActive ? `${className} ${activeClassName}` : className || '';

    return <Link href={href}><a className={newClassName} {...rest}>{children}</a></Link>;
}));


export const AppNavigation = () => {
   return (
     <>
       <header className="app-navigation-header">
          <NavLink to="/" exact strict className="app-navigation-header-logo">
              <div className="app-navigation-header__logo-icon">
                <LogoIcon />
              </div>
              <div className="app-navigation-header__logo-title">
                <TitleIcon />
              </div>
          </NavLink>
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

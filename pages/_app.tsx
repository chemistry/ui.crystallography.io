import React, { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/main.scss';
import './layout.scss';
import { CollapseIcon, LogoMobileIcon, NavBtnIcon } from '../icons';
import { AppMobileNavigation, AppNavigation } from '../layout';
import { ActiveLink } from '../utils';


const Sidebar = ()=> {

    const sidebarClass = classNames({
        "jcw-sidebar": true,
        "closed": true,
    });

    return (
        <div className={sidebarClass}>
            <div>
                <ActiveLink href="/" activeClassName="active"><a className="jcw-sidebar-item">Home</a></ActiveLink><br/>
                <ActiveLink href="/news" activeClassName="active"><a className="jcw-sidebar-item">News</a></ActiveLink><br/>
                <ActiveLink href="/about" activeClassName="active"><a className="jcw-sidebar-item">About</a></ActiveLink>
            </div>
        </div>
    )
}

export const Layout = ({children}:  {children: JSX.Element}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <main className={classNames({ "app": true, "is-open-navigation": isOpen })}>
            <aside className="app-mobile-navigation">
               <div className="app-mobile-navigation-icon" onClick={() => setOpen(!isOpen)}><NavBtnIcon /></div>
               <div className="app-mobile-navigation-logo"><LogoMobileIcon /></div>
            </aside>
            <aside className="app-navigation-menu">
              <AppMobileNavigation onClick={() => setOpen(!isOpen)} />
            </aside>
            <aside className="app-navigation-menu-layout" onClick={() => setOpen(false)}></aside>
            <aside className="app-navigation">
                <AppNavigation />
            </aside>
            <div className="app-collapse-button" onClick={() => setOpen(!isOpen)}>
                <CollapseIcon />
            </div>
            <section className="app-layout">
                {children}
            </section>
        </main>
    );
};

export default function MainLayout({ Component, pageProps }: AppProps) {

    const PageComponent = () => {
        return (
            <Component {...pageProps} />
        );
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
            </Head>
            <Layout>
                <PageComponent></PageComponent>
            </Layout>
        </>
    );
}


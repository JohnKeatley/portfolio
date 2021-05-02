import React from 'react';
import { Link } from "gatsby"
import { withTrans } from '../i18n/withTrans'
import { Header } from './Header';
 
function Layout ({children, t, i18n}) {
    return (
        <div>
            <nav className="navBar">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Header />
            </nav>
            <div>
               <main>{children}</main>
            </div>
          <footer>
             © {new Date().getFullYear()}, {t('home.footerText')}
          </footer>
          </div>
    );
}

export default withTrans(Layout);
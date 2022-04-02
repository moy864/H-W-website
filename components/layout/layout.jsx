import React from 'react';
import styles from "./layout.module.css";
import Navbar from '../navbar';
import Footer from '../footer/footer';


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <main className={styles.pageContainer}>
                {children}
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Layout;
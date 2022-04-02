import '../styles/main.css';
import Layout from '../components/layout';
import React from "react";


function MyApp({ Component, pageProps }) {
    return  (
        <React.Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    ); 
}

export default MyApp;

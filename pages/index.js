import Layout from '../components/layout';
import React from 'react';
import Welcome from '../components/welcome';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
    return (
        <Layout title={'Mathys Simion'} spacing={5}>
            <Welcome/>
            <About/>
            <Contact/>
            <Footer/>
        </Layout>
    )
}

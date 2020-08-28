import React from 'react'
import Head from './Header'
import Section from './Section'
import "../css/Header.css"
import Working from './Working'
function Home() {
    return (
        <div className="my-0">
             <Head title='homeNav' link='home' brand='hombr'  btn="1"></Head>
             <Section></Section>
            <Working />

        </div>
    )
}

export default Home

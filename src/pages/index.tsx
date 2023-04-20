import React  from 'react';
import Head from 'next/head';  
import styles from '@/styles/Home.module.css';
import Header from './header';  
import ExE from './exe';
import Contact from './contact';
import About from './about'; 
import Home from './home'; 

export default function Index() {
	return (
		<>
			<Head>
				<title>Cjescalona1 - Developer</title>
				<meta name="description" content="Clean Portfolio Cjescalona1" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header />
			<main className={styles.main} id='Top'>
				<Home/>
				<ExE/>
				<About/>
				<Contact/> 
			</main>
		</>
	);
}

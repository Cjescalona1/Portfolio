import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import Logo from './components/Logo';
import Social from './components/Social';
import localFont from 'next/font/local'

const myFont = localFont({ src: './GallientRegular.ttf'})

const Header = () => {
	const handleClick = (val: string) => {
		setOpenMenu(!openMenu)
		document.getElementById(val)?.scrollIntoView({ behavior: 'smooth' });
	};
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className={styles.header}> 
			<Logo></Logo>
			<button type='button' className={openMenu? styles.op : styles.cl} onClick={() => { setOpenMenu(!openMenu);}} >
			</button>
			<div className={openMenu? styles.wrapBar : styles.wrapBarClose}>
				<Link   href='/'
					target='_self'
					rel="noopener noreferrer"
					className={styles.linkImage}
					onClick={()=>{
						setOpenMenu(!openMenu);
					}}
				>
					<Image
						src="/croped-CJ-monogram.png"
						alt="CJ monogram"
						className={openMenu? styles.monoLogo:styles.innerMonoLogo}
						width={45}
						height={45}
						priority
					/>
					
				</Link>

					<div className={openMenu?styles.WrapperMenu:styles.wrapBarClose}> 
						<div className={styles.linksWrap}>

						<ul className={openMenu?styles.linksOnMenu:styles.hide}>
							<li>
								<a  onClick={()=>{handleClick("Top");}}>
									HOME  
								</a>
							</li>
							<li>
								<a  onClick={()=>{handleClick("ExE");}}>
									EXPERIENCE & EXPERTICE  
								</a>
							</li>
							<li>
								<a  onClick={()=>{handleClick("About");}}>
									ABOUT ME
								</a>
							</li>
							<li>
								<a  onClick={()=>{handleClick("Contact");}}>
									CONTACT
								</a>
							</li>
						</ul>
						</div>

						<Social  open = {openMenu}></Social>
					</div>
			</div>

		</header>

 
	);
};

export default Header;
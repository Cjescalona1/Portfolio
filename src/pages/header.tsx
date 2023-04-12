import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import Logo from './components/Logo';
import Social from './components/Social';


const Header = () => {
	const handleClick = (val: string) => {

		document.getElementById(val)?.scrollIntoView({ behavior: 'smooth' });
	};
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className={styles.header}>
         
			<Logo></Logo>
			<div className={openMenu? styles.op : styles.cl} onClick={() => { setOpenMenu(!openMenu);}} >
				 
			</div>
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
					<div className={openMenu?styles.WrapperMenu:styles.wrapBarClose}>
						 
						 <Social  open = {openMenu}></Social>
					</div>
				</Link>

				
			</div>

		</header>

 
	);
};

export default Header;
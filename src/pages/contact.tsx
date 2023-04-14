import styles from '@/styles/Contact.module.css';
import {SocialContact} from './components/Social';
import Anim from './components/Anim';  
import localFont from 'next/font/local'

const myFont = localFont({ src: './GallientRegular.ttf'})


const Contact = ()=>{
	return (
    
		<div id="Contact" className={styles.wrapper}>
			<SocialContact />
			 
			<Anim />
		 
			<div className={styles.messageContainer}>
				<div className={styles.message}>
					<p className={myFont.className}>
						Any other question can contact me by my email or my social media.
					</p>
					<br />

					<p  >Cjescalona1@gmail.com</p>
					
				</div>
			</div>

		</div>
    
	);


};
export default Contact;
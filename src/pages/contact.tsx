import styles from '@/styles/Contact.module.css';
import { SocialContact } from './components/Social';
import Anim from './components/Anim';
import localFont from 'next/font/local'

const myFont = localFont({ src: './GallientRegular.ttf' })


const Contact = () => {
	return (
		<section id="Contact" className={styles.wrapper}>
			<div className={styles.messageContainer}>
				<div className={styles.animContainer}>
					<Anim />
				</div>
				<div className={styles.message}>
					<p className={myFont.className}>
						Any other question can contact me by my email or my social media.
					</p>
				</div>
				<div className={styles.mail}>
					<p className={myFont.className}>Cjescalona1@gmail.com</p>
				</div>
				<div className={styles.socialWrapper}>
					<SocialContact />
				</div>
			</div>
		</section>
	);


};
export default Contact;
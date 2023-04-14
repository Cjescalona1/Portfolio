import styles from '@/styles/About.module.css';

const About = ()=>{
	return(
		<section id="About" className={styles.wrapper}>
			<div className={styles.expDesc1}>
			I’m an  <b>Software Developer</b> with passion for the creativity and the better user experience,
			</div>
			<div className={styles.expDesc2}>
			With a degree in   <b>Computer Science</b> and experience in tech remotely  for both startups and established companies.
			</div>
			<div className={styles.expDesc3}>
			I like to elevate your idea creating   <b>Innovative Solutions</b> with attention to details and the better <b>Experience</b>.
			</div>

		</section>
	);
};
export default About;

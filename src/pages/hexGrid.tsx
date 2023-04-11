import styles from '@/styles/ExE.module.css';
import Image from 'next/image'; 
const Grid = ()=>{

	return(
		<>
			<div className={styles.parent}>
				<div className={styles.div1}> 
					<Image src={'/HTML5_logo_and_wordmark.svg'} alt="HTML" width={80} height={90}/>   
				</div>
				<div className={styles.div2}> 
					<Image src={'/CSS3'} alt="CSS3" width={80} height={90}/>
				</div>
				<div className={styles.div3}> 
					<Image src={'/JavaScript-logo.png'} alt="JS" width={80} height={90}/>
				</div>
				<div className={styles.div4}> 
					<Image src="/react" alt="ReactJs" width={80} height={90}/>
				</div>
				<div className={styles.div5}> 
					<Image src="/next.svg" alt="Next" width={80} height={90}/>
				</div>
				<div className={styles.div6}> 
					<Image src="/Nodejs" alt="NodeJs" width={80} height={90}/>
				</div>
				<div className={styles.div7}>
					<Image src="/express.svg" alt="ExpressJs" width={80} height={90}/>
				</div>
			</div>
			<div className={styles.parentMobile}>
				<div className={styles.div1}> 
					<Image src={'/HTML5_logo_and_wordmark.svg'} alt="HTML" width={70} height={90}/>   
				</div>
				<div className={styles.div2}> 
					<Image src={'/CSS3'} alt="CSS3" width={70} height={90}/>
				</div>
				<div className={styles.div3}> 
					<Image src={'/JavaScript-logo.png'} alt="JS" width={70} height={90}/>
				</div>
				<div className={styles.div4}> 
					<Image src="/react" alt="ReactJs" width={70} height={90}/>
				</div>
				<div className={styles.div5}> 
					<Image src="/next.svg" alt="Next" width={70} height={90}/>
				</div>
				<div className={styles.div6}> 
					<Image src="/Nodejs" alt="NodeJs" width={70} height={90}/>
				</div>
				<div className={styles.div7}>
					<Image src="/express.svg" alt="ExpressJs" width={70} height={90}/>
				</div>
			</div>
		</>
	);
};
export default Grid;
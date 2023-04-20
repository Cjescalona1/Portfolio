import styles from '@/styles/ExE.module.css';
import Image from 'next/image'; 
import localFont from 'next/font/local'

const myFont = localFont({ src: '../GallientRegular.ttf'})
const Grid = ()=>{

	return(
		<>
		<div className={styles.Tstack}> <p className={myFont.className}>Tech Stack</p></div>
			<div className={styles.parent}>
				
				<div className={styles.div1}> 
					<Image src={'/HTML5_logo_and_wordmark.svg'} alt="HTML" width={80} height={90}/>   
				</div>
				<div className={styles.div2}> 
					<Image src={'/CSS3'} alt="CSS3" width={70} height={90}/>
				</div>
				<div className={styles.div3}> 
					<Image src={'/JavaScript-logo.png'} alt="JS" width={80} height={90}/>
				</div>
				<div className={styles.div4}> 
					<Image src="/react" alt="ReactJs" width={100} height={90}/>
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
					<Image src={'/HTML5_logo_and_wordmark.svg'} alt="HTML" width={90} height={90}/>   
				</div>
				<div className={styles.div2}> 
					<Image src={'/CSS3'} alt="CSS3" width={70} height={90}/>
				</div>
				<div className={styles.div3}> 
					<Image src={'/JavaScript-logo.png'} alt="JS" width={90} height={90}/>
				</div>
				<div className={styles.div4}> 
					<Image src="/react" alt="ReactJs" width={100} height={90}/>
				</div>
				<div className={styles.div5}> 
					<Image src="/next.svg" alt="Next" width={90} height={90}/>
				</div>
				<div className={styles.div6}> 
					<Image src="/Nodejs" alt="NodeJs" width={90} height={90}/>
				</div>
				<div className={styles.div7}>
					<Image src="/express.svg" alt="ExpressJs" width={90} height={90}/>
				</div>
			</div>
		</>
	);
};
export default Grid;
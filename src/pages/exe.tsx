
import styles from '@/styles/ExE.module.css';
import Carousel from './components/carousel';
import HexGrid from './components/hexGrid';

const ExE = ()=>{
	return(
		<div id="ExE" className={styles.wrapper}>
			<div className={styles.left}>
				<Carousel/>
			</div>
			<div className={styles.right}>
				<HexGrid/>
			</div>
		</div>
        
	);
};

export default ExE;
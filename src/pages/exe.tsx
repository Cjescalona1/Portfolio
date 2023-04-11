
import styles from '@/styles/ExE.module.css';
import Carousel from './carousel';
import HexGrid from './hexGrid';

const ExE = ()=>{
	return(
		<div id="ExE" className={styles.wrapper}>
			<div className={styles.left}>
				<Carousel />
			</div>
			<div className={styles.right}>
				<HexGrid/>
			</div>
		</div>
        
	);
};

export default ExE;
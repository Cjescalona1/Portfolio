import styles from '@/styles/ExE.module.css';
import Image from 'next/image';
const carouselElements: any[] = [{ 'description': 'Multiporpose NFT related page', 'name': 'car1.jpeg' }, { 'description': 'Components integration on E-commerce', 'name': 'car2.svg' }, { 'description': 'NFT generative collection', 'name': 'car3.jpeg' }, { 'description': 'Mint site for lootboxes related to NFT collection', 'name': 'car4.png' }, { 'description': 'Mint site for NFTs', 'name': 'car5.png' }, { 'description': 'NFT related staking game', 'name': 'car6.png' }, { 'description': 'Cybermetric, Data collection tool', 'name': 'car7.png' }];

const Carousel = () => {
	return (
		<>
			<div>
				<ul className={styles.carouselWrapper}>
					{carouselElements.map((item, index) => {
						return (
							<li className={styles.itemCarousel} key={item.name} >
								<article className={styles.slider}>
									<figure >
										<Image id={'id' + index} src={`/${item.name}`} alt={item.name} height={400} width={700} />
									</figure>
									<figcaption className={styles.auxMar}>
										{item.description}
									</figcaption>
								</article>
							</li>
						);
					})
					}
				</ul>

			</div>
			<div>
				<ul className={styles.carouselWrapperMobile}>
					{carouselElements.map((item, index) => {
						return (
							<li className={styles.itemCarousel} key={item.name} >
								<article className={styles.slider}>
									<figure >
										<Image id={'id' + index} src={`/${item.name}`} alt={item.name} height={280} width={320} />
									</figure>
									<figcaption className={styles.auxMar}>
										{item.description}
									</figcaption>
								</article>
							</li>
						);
					})
					}
				</ul>

			</div>

		</>
	);
};

export default Carousel;
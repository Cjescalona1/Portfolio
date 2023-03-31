import styles from '@/styles/ExE.module.css'
import Image from 'next/image';
const carouselElements : string[] = ["car1.jpeg","car2.svg","car3.jpeg","car4.png","car5.png","car6.png","car7.png"];

const Carousel = ()=>{
    return(
        <>
            <div>
                <ul className={styles.carouselWrapper}>
                    {carouselElements.map((item, index)=>{
                    return(
                            <li className={styles.itemCarousel} key={item} >
                                <article className={styles.slider}>
                                    <figure >
                                    <Image id={"id"+index} src={`/${item}`} alt={item} height={400}  width={700}/>
                                    </figure>
                                </article>
                            </li>
                        )
                    })                    
                    }
                </ul>
                
            </div>

        </>
    )
}

export default Carousel;
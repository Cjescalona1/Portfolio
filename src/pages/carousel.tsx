import styles from '@/styles/ExE.module.css'

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
                                    <img id={"id"+index} src={`${item}`} alt={item}/>
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
import styles from '@/styles/ExE.module.css'
 
const Grid = ()=>{

    return(
        <>
        <div className={styles.parent}>
            <div className={styles.div1}> 
                <img src={"/HTML5_logo_and_wordmark.svg"} alt="HTML" />
            </div>
            <div className={styles.div2}> 
                <img src={"/CSS3"} alt="CSS3" />
            </div>
            <div className={styles.div3}> 
                <img src={"/JavaScript-logo.png"} alt="JS" />
            </div>
            <div className={styles.div4}> 
                <img src="/react" alt="ReactJs"/>
            </div>
            <div className={styles.div5}> 
                <img src="/next.svg" alt="Next" />
            </div>
            <div className={styles.div6}> 
                <img src="/Nodejs" alt="NodeJs" />
            </div>
            <div className={styles.div7}>
                <img src="/express.svg" alt="ExpressJs" />
            </div>
        </div>
        </>
    )
}
export default Grid;
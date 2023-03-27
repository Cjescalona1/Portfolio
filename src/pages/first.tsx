import styles from '@/styles/First.module.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: './GallientRegular.ttf'})

const handleClick = (val:string)=>{
        
    document.getElementById(val)?.scrollIntoView({behavior:'smooth'}) 
}

const First = ()=>{
    return( 
        <section className={styles.wrapper}>
            <div className={styles.left}> 
                <h1 className={myFont.className}>
                Carlos Escalona
                </h1>    
                <span className={myFont.className}>
                    Frontend Developer
                </span>
            </div>    
            <div className={styles.right}> 
                <div >
                    <ul className={styles.links} >
                        <li >
                            <a className={myFont.className} onClick={()=>{handleClick("ExE")}}>
                                Expertice and Experience 
                            </a>
                        </li>
                        <li  >
                            <a className={myFont.className} onClick={()=>{handleClick("About")}}>
                                About me
                            </a>
                        </li>
                        <li >
                            <a className={myFont.className} onClick={()=>{handleClick("Contact")}}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
                <a className={styles.buttonScroll} onClick={()=>{handleClick("ExE")}}>
                    <div className={styles.scroll} > <p> v </p> </div>    
                </a>
        </section>
    )
}

export default First;
import styles from '@/styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link'; 


const Header = ()=>{

    const handleClick = (val:string)=>{
        
        document.getElementById(val)?.scrollIntoView({behavior:'smooth'}) 
    }
    return(
        <header className={styles.header} >
            <Link
              href="/"
              target="_self"
              rel="noopener noreferrer"
            > 
              <Image
                src="/croped-CJ-monogram.png"
                alt="CJ monogram"
                className={styles.monoLogo}
                width={45}
                height={45}
                priority
              />
            </Link>
            
            <nav className={styles.barWrap} >
                <div className={styles.barCont}>
                    <ul className={styles.barItems}>
                        <li>
                            <a className={styles.NavItem} onClick={()=>{handleClick("Top")}}>
                                Home
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem}   onClick={()=>{handleClick("ExE")}}>
                                Experience & Expertice 
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem}  onClick={()=>{handleClick("About")}}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a className={styles.NavItem}   onClick={()=>{handleClick("Contact")}}>
                                Contact
                            </a>
                        </li>    
                    </ul>
                </div>
            </nav>
        </header>
        
    )
}

export default Header;
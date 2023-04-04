import styles from '@/styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Header = () => {
    const handleClick = (val: string) => {

        document.getElementById(val)?.scrollIntoView({ behavior: 'smooth' })
    }
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className={styles.header}>
            <Link
                href="/"
                target="_self"
                rel="noopener noreferrer"
                className={styles.linkImage}
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
            {openMenu ?
                <>
                    <div className={styles.buttonMenu} onClick={() => { setOpenMenu(!openMenu) }}>   </div>
                    <div className={styles.barWrapMobile}>
                        <Link
                            href="/"
                            target="_self"
                            rel="noopener noreferrer"
                            className={styles.linkImageMobile}
                        >
                            <Image
                                src="/croped-CJ-monogram.png"
                                alt="CJ monogram"
                                className={styles.monoLogoMobile}
                                width={45}
                                height={45}
                                priority
                            />
                        </Link>
                        <div>

                        <ul className={styles.barItemsMobile}>
                        <li>
                            <a className={styles.NavItem} onClick={() => { handleClick("Top"); setOpenMenu(!openMenu)  }}>
                                Home
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem} onClick={() => { handleClick("ExE");setOpenMenu(!openMenu)  }}>
                                Experience & Expertice
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem} onClick={() => { handleClick("About");setOpenMenu(!openMenu)  }}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a className={styles.NavItem} onClick={() => { handleClick("Contact");setOpenMenu(!openMenu)  }}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    </div>

                    </div>
                </>
                :
                <>
                    <div className={styles.buttonMenu} onClick={() => { setOpenMenu(!openMenu) }}>   </div>

                </>
            }


            <nav className={styles.barWrap} >
                <div className={styles.barCont}>
                    <ul className={styles.barItems}>
                        <li>
                            <a className={styles.NavItem} onClick={() => { handleClick("Top") }}>
                                Home
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem} onClick={() => { handleClick("ExE") }}>
                                Experience & Expertice
                            </a>
                        </li>
                        <li >
                            <a className={styles.NavItem} onClick={() => { handleClick("About") }}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a className={styles.NavItem} onClick={() => { handleClick("Contact") }}>
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
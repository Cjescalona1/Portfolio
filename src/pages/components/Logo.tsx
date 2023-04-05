import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Header.module.css'

const Logo = ()=>{
    return(
        <>

        <Link   href='/'
                    target='_self'
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
        </>
    )
}

export default Logo;
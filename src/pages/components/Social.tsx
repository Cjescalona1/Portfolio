import styles from '@/styles/Header.module.css';
import Image from 'next/image';

const socialIcons: any[] = [{ src: "Lin", link: "http://linkedin.com/in/cjescalona1" },             
                            { src: "gh", link: "http://github.com/cjescalona1" }, 
                            { src: "tw", link: "http://www.twitter.com/cjescalona1" }, 
                            { src: "ig", link: "http://instagram.com/cjescalona1" },
                            ]
const goto = (url: string) => {
    window.open(url, "_blank");
}
const Social = (props: any) => {
    const localStyle = props.open;

    return (

        <ul className={localStyle ? styles.socialList : styles.hide}>
            {socialIcons.map((item) => {
                return (
                    <li key={item.src} >
                        <Image src={`${item.src}-icon.svg`} alt="item" width={59} height={59} onClick={() => { goto(item.link) }} />
                    </li>
                )
            })}
        </ul>

    )
}

export const SocialContact = () => {
    return (
        <ul className={styles.socialListContact}>
            {socialIcons.map((item) => {
                return (
                    <li key={item.src} >
                        <Image src={`${item.src}-icon.svg`} alt="item" width={80} height={80} onClick={() => { goto(item.link) }} />
                    </li>
                )
            })}
        </ul>
    )
}
export default Social;
import styles from '@/styles/Header.module.css';
import Image from 'next/image'; 

const socialIcons : any[]  = [{src:"tw", link:"http://www.twitter.com/cjescalona1"},{src:"ig", link:"http://instagram.com/cjescalona1"},{src:"gh", link:"http://github.com/cjescalona1"},{src:"Lin", link:"http://linkedin.com/in/cjescalona1"}]
const goto = (url : string)=>{
        console.log(url);
        window.open(url, "_blank");
}
const Social = (props:any)=>{
    const localStyle = props.open;

       return(
     
        <ul className={localStyle ? styles.socialList : styles.hide }>
        {socialIcons.map((item)=>{        
        return(
    
            <li key={item.src} > 
                <Image src={`${item.src}-icon.svg`} alt="item" width={55} height={55}  onClick={()=>{goto(item.link )}}/>            
            </li>
        )
        })}
        </ul>
     
    )
}

export default Social;
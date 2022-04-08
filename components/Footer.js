import Link from 'next/link'
import Image from 'next/image'
import footerStyles from '../styles/Footer.module.css'

import LogoVisma from '../public/LogoVisma.png'

function Footer() {
 const teleport = ()=>{
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
 } 
 
  return (
    <div className={footerStyles.footer}>
        <div className={footerStyles.footer_inner_left}>
          <Image className={footerStyles.footer_image}
            src={LogoVisma}
            width={210}
            height={40}
            alt="Bildet av Loget til utviklingsselskapet"
          />
          <Link href="/">Om IT_JOBB</Link>
          <Link href="/">Kontakt oss</Link>
          <Link href="/">Hjelp</Link>
        </div>
        <div className={footerStyles.footer_inner_right}>
          <div onClick={teleport} className={footerStyles.footer_inner_right_totopp}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30.455" height="19.034" viewBox="0 0 30.455 19.034">
              <path id="iconmonstr-arrow-63" d="M8.091,30.455,4.5,26.865,16.351,15.222,4.5,3.59,8.091,0,23.534,15.222Z" transform="translate(0 23.534) rotate(-90)" fill="#fff"/>
            </svg>
            <a > Til Topp</a>
          </div>        
        </div>
    </div>
  )
}

export default Footer



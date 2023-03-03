import './Footer.css'
import LogoFooter from '../assets/logo-footer.svg'


export const Footer = () => {
    return (
        <div className='footer'>
            <img src={LogoFooter} alt="Kasa" className='footer-logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}


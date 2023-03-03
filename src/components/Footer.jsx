import './Footer.css'
import LogoFooter from '../assets/logo-footer.svg'


function Footer() {
    return (
        <div className='footer'>
            <img src={LogoFooter} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
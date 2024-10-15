import './style.css'
import WhatsappLogo from '../../assets/whatsapp-logo.svg'

function WhatsButton () {
    return (
        <div className='btnDiv'>
            <p>CONVERSAR <br></br>COM VENDEDOR</p>
            <img src={WhatsappLogo} alt="Logo WhatsApp" className='imgLogo'/>
        </div>
    )
}

export default WhatsButton
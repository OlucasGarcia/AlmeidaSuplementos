import './style.css'
import WhatsappLogo from '../../assets/whatsapp-logo.svg'

function WhatsButton () {
    return (
        <div className='btnDiv'>
            <a className='whatsTxt' target='_blank' href="https://api.whatsapp.com/send?phone=5515997357627&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20loja%20Almeida%20Suplementos">
            <p>CONVERSAR <br></br>COM VENDEDOR</p>
            <img src={WhatsappLogo} alt="Logo WhatsApp" className='imgLogo'/>
            </a>
        </div>
    )
}

export default WhatsButton
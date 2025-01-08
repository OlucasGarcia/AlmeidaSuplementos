import './style.css'
import WhiteLogo from '../../assets/logo-branca.svg'
import InstaLogo from '../../assets/insta-logo.svg'
import LinkedinLogo from '../../assets/linkedin-logo.svg'
import GitHubLogo from '../../assets/github-logo.svg'
import WhatsButton from '../whatsButton'

function Footer() {
    return (
        <div className='divFooter'>
            <img src={WhiteLogo} alt="" className='imgLogoLoja' />
            <div className='socialNetDiv'>
                <p className='footerTxt'>NOS SIGA NO <span className='newColorTxt'>INSTAGRAM</span> PARA VER TODAS AS NOVIDADES</p>
                <button className='socialBtn'>
                    <a href="https://www.instagram.com/almeida_suplementosrb/" target='_blank'>
                        <img src={InstaLogo} className='instaImg' />
                    </a>
                </button>
            </div>
            <div className='whatsDivButton'>
                <p className='footerTxt'>
                    ENTRE EM CONTATO DIRETAMENTE COM UM VENDEDOR
                </p>
                <WhatsButton />
            </div>
            <hr className='line1' />
            <div className='footerTxt'>
                <p>Desenvolvido por:</p>
                <p className='devName'>Lucas Garcia</p>
                <div className='footerDevBtn'>
                    <button className='socialBtn'>
                        <a href="https://www.linkedin.com/in/garcialucasga/" target='_blank' >
                            <img src={LinkedinLogo} alt="LinkedIn" className='devSocialImg' />
                        </a>
                    </button>
                    <button className='socialBtn'>
                        <a href="https://github.com/OlucasGarcia" target='_blank' >
                            <img src={GitHubLogo} alt="GitHub" className='devSocialImg' />
                        </a>
                    </button>
                    <button className='socialBtn'>
                        <a href="https://www.instagram.com/oluucasgarcia/" target='_blank' >
                            <img src={InstaLogo} alt="Instragram" className='devSocialImg instaLogoImg' />
                        </a>
                    </button>
                </div>

            </div>
            <hr className='line2' />
            <p className='docTxt'>
                56.998.240 KAIQUE GABRIEL DE OLIVEIRA ALMEIDA - RUA JOSE GOMES RODRIGUES, 43 - Ribeirão Branco - SP CEP: 18.430-000 - CNPJ: 56.998.240/0001-81 ©
                <br></br>2024 Todos os direitos reservados.
            </p>
        </div>
    )
}

export default Footer
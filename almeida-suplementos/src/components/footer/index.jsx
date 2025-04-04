import styles from './style.module.css'
import WhiteLogo from '../../assets/logo-branca.svg'
import InstaLogo from '../../assets/insta-logo.svg'
import LinkedinLogo from '../../assets/linkedin-logo.svg'
import GitHubLogo from '../../assets/github-logo.svg'
import WhatsButton from '../whatsButton'

function Footer() {
    return (
        <div className={styles.divFooter}>
            <img src={WhiteLogo} alt="Almeida Suplementos" className={styles.imgLogoLoja} />
            <div className={styles.socialNetDiv}>
                <p className={styles.footerTxt}>NOS SIGA NO <span className={styles.txtCor}>INSTAGRAM</span> PARA VER TODAS AS NOVIDADES</p>
                <button className={styles.socialBtn}>
                    <a href="https://www.instagram.com/almeida_suplementosrb/" target='_blank'>
                        <img src={InstaLogo} alt='Almeida Suplementos Instagram' className={styles.socialImg} />
                    </a>
                </button>
            </div>
            <div className={styles.whatsDivButton}>
                <p className={styles.footerTxt}>
                    ENTRE EM CONTATO DIRETAMENTE COM UM VENDEDOR
                </p>
                <WhatsButton />
            </div>
            <hr className={styles.line1} />
            <div className={styles.footerTxt}>
                <p>Desenvolvido por:</p>
                    <p className={styles.devName}>Lucas Garcia</p>
                <div className={styles.footerDevBtn}>
                    <button className={styles.socialBtn}>
                        <a href="https://www.linkedin.com/in/garcialucasga/" target='_blank' >
                            <img src={LinkedinLogo} alt="LinkedIn" className={styles.socialImg} />
                        </a>
                    </button>
                    <button className={styles.socialBtn}>
                        <a href="https://github.com/OlucasGarcia" target='_blank' >
                            <img src={GitHubLogo} alt="GitHub" className={styles.socialImg} />
                        </a>
                    </button>
                    <button className={styles.socialBtn}>
                        <a href="https://www.instagram.com/oluucasgarcia/" target='_blank' >
                            <img src={InstaLogo} alt="Instragram" className={styles.socialImg} />
                        </a>
                    </button>
                </div>

            </div>
            <hr className={styles.line2} />
            <p className={styles.docTxt}>
                56.998.240 KAIQUE GABRIEL DE OLIVEIRA ALMEIDA - RUA JOSE GOMES RODRIGUES, 43 - Ribeirão Branco - SP CEP: 18.430-000 - CNPJ: 56.998.240/0001-81 ©
                <br></br>2024 Todos os direitos reservados.
            </p>
        </div>
    )
}

export default Footer
import styles from './style.module.css'
import { Link, useLocation } from 'react-router-dom'

//import de imagens e icons usados no componente
import Logo from '../../assets/logo-navbar.svg'
import MenuIcon from '../../assets/menu.svg'

function Navbar() {

    const location = useLocation();

    return (
        <div className={styles.navbar}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Almeida Suplementos" className={styles.logo} />
            </Link>

            <ul className={styles.buttons}>

                {/* useLocation usado para separar conteúdos que aparecerão em apenas algumas páginas definitas pelo pathname */}
                {location.pathname === "/" && (
                    <>
                        <li className={styles.btnText}>
                            <a className={styles.linkBtn} href="#ofertas">OFERTAS</a>
                        </li>
                    </>
                )}
                <li className={styles.btnText}>
                    <a className={styles.linkBtn} href="#produtos">PRODUTOS</a>
                </li>
                <span className={styles.line}></span>

                <li className={styles.btnContact}>
                    <a className={styles.linkContact} target='_blank' href="https://api.whatsapp.com/send?phone=5515997357627&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20loja%20Almeida%20Suplementos">CONTATO</a>
                </li>
            </ul>

            {/* div dropdown aparece somente com a tela em formato mobile */}
            <div className={styles.dropdown}>
                <img src={MenuIcon} className={styles.menuBtn} />
                <div className={styles.dropdownContent}>
                    {location.pathname === "/" && (
                        <a href="#ofertas">OFERTAS</a>
                    )}
                    <a href="#produtos">PRODUTOS</a>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=5515997357627&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20loja%20Almeida%20Suplementos">CONTATO</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
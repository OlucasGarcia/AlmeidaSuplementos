import './style.css'
import Logo from '../../assets/logo-navbar.svg'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

const location = useLocation();

    return (
        <div className='navbar'>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Logo} alt="Almeida Suplementos" className='logo' />
            </Link>
            
                <div className='buttons'>
                {location.pathname === "/" && (
                    <>
                <button type='text' className='btnText'>
                    <a className='linkBtn' href="#ofertas">OFERTAS</a>
                </button>
                <button type='text' className='btnText'>
                    <a className='linkBtn' href="#produtos">PRODUTOS</a>
                </button>
                <span className='line'></span>
                </>
            )}
                <button type='text' className='btnContato'>
                    <a className='linkBtn linkContact' target='_blank' href="https://api.whatsapp.com/send?phone=5515997357627&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20loja%20Almeida%20Suplementos">CONTATO</a>
                </button>
            </div>
            
        </div>
    )
}

export default Navbar
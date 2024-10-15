import './style.css'
import Logo from '../../assets/logo-navbar.svg'

function Navbar () {
    return (
        <div className='navbar'>
            <img src={Logo} alt="Almeida Suplementos" className='logo'/>
            <div className='buttons'>
                <button type='text' className='btnText'>PRODUTOS</button>
                <button type='text' className='btnText'>OFERTAS</button>
                <span className='line'></span>
                <button type='text' className='btnContato'>CONTATO</button>
            </div>
        </div>
    )
}

export default Navbar
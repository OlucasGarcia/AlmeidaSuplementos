import './style.css'
import ErrorImg from '../../assets/errorImg.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import CardsList from '../../components/cardsList'
import Footer from '../../components/footer'

function Error() {
    return (
        <div className='hero'>
            <Navbar />
            <div className='errorDiv'>
                <img src={ErrorImg} className='errorImg' alt="Error Image" />
                <p className='errorTxt'>Ops! Parece que seu suplemento não está aqui! 😓</p>
                <button className='backBtn'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: 20 }} >VOLTAR</Link>
                </button>
            </div>
            <div className='productsError' id='produtos'>
                <div className='lineDiv'></div>
                <h2>
                    <span className='txtCor'>PRODUTOS</span> QUE VOCÊ PODE GOSTAR
                </h2>
                <CardsList />
            </div>
            <Footer />
        </div>
    )
}

export default Error
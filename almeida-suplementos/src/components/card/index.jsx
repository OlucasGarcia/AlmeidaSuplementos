import './style.css'
import Teste from '../../assets/teste.svg'

function Card () {
    return (
        <div className='card'>
            <div className='imgCard'>
                <img src={Teste} alt="Produto" />
            </div>
            <div>
                <p>Nome do suplemento</p>
            </div>
            <div>
                <p>R$ 000,00</p>
            </div>
        </div>
    )
}

export default Card
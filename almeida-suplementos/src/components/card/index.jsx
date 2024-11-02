import './style.css'
import Teste from '../../assets/teste.svg'

function Card ( props ) {

    const { product, onPress } = props
    return (
        <div className='card'>
            <div className='imgCard'>
                <img src={product.image} alt="Produto" />
            </div>
            <div>
                <p>{product.name}</p>
            </div>
            <div>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default Card
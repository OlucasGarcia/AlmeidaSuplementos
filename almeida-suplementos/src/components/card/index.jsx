import './style.css'
import Teste from '../../assets/teste.svg'
import { Link } from 'react-router-dom'

function Card(props) {

    const { product, onPress } = props
    return (
        <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>
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
        </Link>
    )
}

export default Card
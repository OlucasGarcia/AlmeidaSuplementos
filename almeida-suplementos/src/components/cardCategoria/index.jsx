import './style.css'
import { Link } from 'react-router-dom'
import { PRODUCTS ,CATEGORIES } from '../../dataset/products'

function CardCategoria( props ) {

    const { category } = props

    return (
        <div className='cardDiv'>
            <Link key={category.id} to={`/search/${category.title}`} style={{ textDecoration: 'none', display: 'flex'}}>
            <img src={category.image} alt="" className='imgProd' />
            <div className='nameDiv'>
                <p className='prodTxt'>{category.product}</p>
            </div>
            </Link>
        </div>
    )
}

export default CardCategoria
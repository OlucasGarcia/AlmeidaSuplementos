import './style.css'
import Card from '../card'
import PRODUCTS from '../../dataset/products'

function CardsList () {
    return (
        <div className='list'>
            {
                PRODUCTS.map(
                    (product) => {
                        return <Card 
                        key={product.id}
                        product={product}
                        />
                    }
                )
            }
        </div>
    )
}

export default CardsList
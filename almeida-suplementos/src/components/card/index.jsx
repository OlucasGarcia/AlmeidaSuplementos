import styles from './style.module.css'
import { Link } from 'react-router-dom'

function Card(props) {

    const { product } = props
    
    return (
        <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles.card}>

                <div className={styles.imgCard}>
                    <img src={product.image} alt={product.name} />
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
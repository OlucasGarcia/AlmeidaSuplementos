import styles from './style.module.css'
import { Link } from 'react-router-dom'

function CardCategoria(props) {

    const { category } = props

    return (
        <div className={styles.cardDiv}>
            <Link key={category.id} to={`/search/${category.title}`} style={{ textDecoration: 'none', display: 'flex' }}>
                <img src={category.image} alt={category.product} className={styles.imgProd} />
                <div className={styles.nameDiv}>
                    <p className={styles.prodTxt}>{category.product}</p>
                </div>
            </Link>
        </div>
    )
}

export default CardCategoria
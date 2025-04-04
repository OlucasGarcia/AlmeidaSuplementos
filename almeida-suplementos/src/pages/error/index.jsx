import styles from './style.module.css'
import ErrorImg from '../../assets/errorImg.svg'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import CardsList from '../../components/cardsList'
import Footer from '../../components/footer'

function Error() {
    return (
        <div className={styles.hero}>
            <Navbar />
            <div className={styles.errorDiv}>
                <img src={ErrorImg} className={styles.errorImg} alt="Error Image" />
                <p className={styles.errorTxt}>Ops! Parece que seu suplemento não está aqui! 😓</p>
                <button className={styles.backBtn}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: 20 }} >VOLTAR</Link>
                </button>
            </div>
            <div className={styles.productsError} id='produtos'>
                <div className={styles.lineDiv}></div>
                <h2>
                    <span className={styles.txtCor}>PRODUTOS</span> QUE VOCÊ PODE GOSTAR
                </h2>
                <CardsList />
            </div>
            <Footer />
        </div>
    )
}

export default Error
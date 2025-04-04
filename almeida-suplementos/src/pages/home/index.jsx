import CardsList from '../../components/cardsList'
import WhatsButton from '../../components/whatsButton'
import CardCategoria from '../../components/cardCategoria'
import Background from '../../assets/fundo-header.svg'
import styles from './style.module.css'
import { CATEGORIES } from '../../dataset/products'

function Home() {

  return (
    <div className={styles.page}>

      <header>
        <img src={Background} alt="Imagem de fundo" className={styles.headerImg} />
        <h1 className={styles.headerTxt} >SUA FONTE DE <span className={styles.txtCor} >SUPLEMENTOS</span> PREMIUM</h1>
      </header>
      <main>
        <div className={styles.products} id='ofertas'>
        <div className={styles.lineDiv} ></div>
          <h2>
            PRODUTOS EM <span className={styles.txtCor}>PROMOÇÃO</span>
          </h2>
          <CardsList />
        </div>
        <div className={styles.products} id='produtos'>
        <div className={styles.lineDiv} ></div>
          <h2>
            PRODUTOS MAIS <span className={styles.txtCor} >BUSCADOS</span>
          </h2>
          <CardsList />
        </div>
        <div className={styles.category} >
          {
                CATEGORIES.map(
                    (category) => {
                        return <CardCategoria 
                        key={category.id}
                        category={category}
                        />
                    }
                )
            }
        </div>
      </main>
      <section >
        <h2 className={styles.txtWhats}>
          FAÇA SUA COMPRA PELO <span className={styles.txtGreen} >WHATSAPP</span>
        </h2>
        <WhatsButton />
        <p className={styles.txtAction} >Converse diretamente com um vendedor pelo WhatsApp clicando no botão acima!</p>
      </section>
    </div>
  )
}

export default Home

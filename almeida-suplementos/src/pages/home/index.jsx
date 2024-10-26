import { useState } from 'react'
import CardsList from '../../components/cardsList'
import Navbar from '../../components/navbar'
import WhatsButton from '../../components/whatsButton'
import CardCategoria from '../../components/cardCategoria'
import Footer from '../../components/footer'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='hero'>

      <header>
        <img src="" alt="" />
        <h1>SUA FONTE DE <span>SUPLEMENTOS</span> PREMIUM</h1>
      </header>
      <div>
        <Navbar />
      </div>
      <main>
        <hr />
        <div>
          <h2>
            PRODUTOS EM <span>PROMOÇÃO</span>
          </h2>
          <CardsList />
        </div>
        <hr />
        <div>
          <h2>
            PRODUTOS MAIS <span>BUSCADOS</span>
          </h2>
          <CardsList />
        </div>
        <div>
          <CardCategoria />
        </div>
      </main>
      <section>
        <h2>
          FAÇA SUA COMPRA PELO <span>WHATSAPP</span>
        </h2>
        <WhatsButton />
        <p>Converse diretamente com um vendedor pelo WhatsApp clicando no botão acima!</p>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home

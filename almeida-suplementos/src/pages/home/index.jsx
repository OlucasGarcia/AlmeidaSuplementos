import { useState } from 'react'
import CardsList from '../../components/cardsList'
import Navbar from '../../components/navbar'
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
          COMPONENTES DOS CARDS DE PRODUTOS
        </div>
        <div>
          COMPONENTES DE CARDS BUTTON
        </div>
      </main>
      <section>
        <h2>
          FAÇA SUA COMPRA PELO <span>WHATSAPP</span>
        </h2>
        COMPONENTE BUTTON WHATSAPP
        <p>Converse diretamente com um vendedor pelo WhatsApp clicando no botão acima!</p>
      </section>
      <footer>
        <img src="" alt="" />
        <div>
          <p>NOS SIGA NO <span>INSTAGRAM</span> PARA VER TODAS AS NOVIDADES</p>
          <button>
            <img src="" alt="" />
          </button>
        </div>
        <p>
          ENTRE EM CONTATO DIRETAMENTE COM UM VENDEDOR
        </p>
        COMPONENTE BUTTON WHATSAPP
        <hr />
        <div>
          <p>Desenvolvido por:</p>
          <p>Lucas Garcia</p>
          <button>LINKEDIN</button>
          <button>GITHUB</button>
          <button>INSTAGRAM</button>
        </div>
        <hr />
        <p>
          EXEMPLO DE NOME LTDA - Rua Fulano de tal, 100 - Ribeirão Branco - SP CEP: 18.430-000 - CNPJ: 00.000.000/0000-00 ©
          2024 Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default Home

import { useState } from 'react'
import CardsList from '../../components/cardsList'
import WhatsButton from '../../components/whatsButton'
import CardCategoria from '../../components/cardCategoria'
import Background from '../../assets/fundo-header.svg'
import './style.css'

function Home() {

  return (
    <body className='hero'>

      <header>
        <img src={Background} alt="Imagem de fundo" className='headerImg' />
        <h1 className='headerTxt'>SUA FONTE DE <span className='txtCor'>SUPLEMENTOS</span> PREMIUM</h1>
      </header>
      <main>
        <div className='products' id='ofertas'>
        <div className='lineDiv'></div>
          <h2>
            PRODUTOS EM <span className='txtCor'>PROMOÇÃO</span>
          </h2>
          <CardsList />
        </div>
        <div className='products' id='produtos'>
        <div className='lineDiv'></div>
          <h2>
            PRODUTOS MAIS <span className='txtCor'>BUSCADOS</span>
          </h2>
          <CardsList />
        </div>
        <div className='products'>
          <CardCategoria />
        </div>
      </main>
      <section className='divWhats'>
        <h2 className='txtWhats'>
          FAÇA SUA COMPRA PELO <span className='txtGreen'>WHATSAPP</span>
        </h2>
        <WhatsButton />
        <p className='txtAction'>Converse diretamente com um vendedor pelo WhatsApp clicando no botão acima!</p>
      </section>
    </body>
  )
}

export default Home

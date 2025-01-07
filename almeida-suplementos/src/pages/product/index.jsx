import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

import './style.css'
import { PRODUCTS } from '../../dataset/products';
import WhatsButton from '../../components/whatsButton';
import Background from '../../assets/fundo-header.svg'
import CardsList from '../../components/cardsList';

function Product() {

    const { id } = useParams();
    const product = PRODUCTS.find((item) => item.id === id);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);

    return (
        <div>
            <div className='productDiv'>
                <img src={Background} className='backgroundImg' />
                <img src={product.image} className='productImage' />
                <div className='productInfos'>
                    <h2 className='nameProd'>{product.name}</h2>
                    <p className='descProd'>{product.desc}</p>
                    <p className='priceProd'>{product.price}</p>
                    <WhatsButton/>
                </div>
            </div>
            <div className='newProducts' id='produtos'>
            <div className='lineDiv'></div>
                <h2>MAIS <span className='txtCor'>PRODUTOS</span></h2>
                <CardsList/>
            </div>
            <div className='divWhats'>
                <h2 className='txtWhats'>FAÇA SUA COMPRA PELO <span className='txtGreen'>WHATSAPP</span></h2>
                <WhatsButton/>
                <p className='txtAction'>Converse diretamente com um vendedor pelo <br/> WhatsApp clicando no botão acima!</p>
            </div>
        </div>
    )
}

export default Product
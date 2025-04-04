import { useParams } from 'react-router-dom'
import { startTransition, useEffect } from 'react';

import styles from './style.module.css'
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
            <div className={styles.productDiv}>
                <img src={Background} className={styles.backgroundImg} />
                <div className={styles.productInfos} >
                    <img src={product.image} className={styles.productImage} />
                    <div className={styles.productInfosTxt} >
                        <p className={styles.nameProd} >{product.name}</p>
                        <p className={styles.descProd} >{product.desc}</p>
                        <p className={styles.priceProd} >{product.price}</p>
                        <WhatsButton />
                    </div>
                </div>
            </div>
            <div className={styles.newProducts} id='produtos'>
                <div className={styles.lineDiv} ></div>
                <h2>MAIS <span className={styles.txtCor} >PRODUTOS</span></h2>
                <CardsList />
            </div>
            <div className={styles.divWhats} >
                <h2 className={styles.txtWhats} >FAÇA SUA COMPRA PELO <span className={styles.txtGreen} >WHATSAPP</span></h2>
                <WhatsButton />
                <p className={styles.txtAction} >Converse diretamente com um vendedor pelo <br /> WhatsApp clicando no botão acima!</p>
            </div>
        </div>
    )
}

export default Product
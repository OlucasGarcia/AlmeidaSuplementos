import React, { useEffect } from "react";
import styles from './style.module.css'
import { useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../../dataset/products";
import Card from "../../components/card";

function Search( ) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const { title } = useParams();
    const category = CATEGORIES.find((item) => item.title === title);

    const filtered = PRODUCTS.filter(product => product.category === category.title);

    return (
        <div className={styles.hero} id="produtos">
            <h1 className={styles.titleTxt} >EXPLORE NOSSA SELEÇÃO <br></br> ESPECIAL DE <span className={styles.txtCor}>{category.product}</span></h1>
            <div className={styles.productsDiv} >
            {
                filtered.length > 0 ? (
                    filtered.map(product => (
                        <Card
                        key={product.id}
                        product={product}
                        />
                    ))
                ) : (<p>Infelizmente não há produtos dessa categoria no momento!</p>)}
                </div>
        </div>
    )
}

export default Search;
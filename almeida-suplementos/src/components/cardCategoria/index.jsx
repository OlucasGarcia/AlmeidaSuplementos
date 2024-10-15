import './style.css'
import Teste from '../../assets/teste.svg'

function CardCategoria() {
    return (
        <div className='cardDiv'>
            <img src={Teste} alt="" className='imgProd' />
            <div className='nameDiv'>
                <p className='nameProd'>WHEY PROTEIN</p>
            </div>
        </div>
    )
}

export default CardCategoria
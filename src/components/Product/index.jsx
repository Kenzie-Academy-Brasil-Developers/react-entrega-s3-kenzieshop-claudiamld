import { useDispatch } from "react-redux";
import {removeFromCartThunk, addToCartThunk} from '../../store/modules/cart/thunks'
import { Container } from "./styles";

const Product = ({product, isRemovable = false}) => {

    const dispatch = useDispatch()

    const {id, name, price, image} = product;

    return(
        <Container>
            <img src={image} alt="imagem" />
            <h3>{name}</h3>
            <h3>R$ {price}</h3>
            {isRemovable ? (
                <button onClick={() => dispatch(removeFromCartThunk(id))}>Remover item do carrinho</button>
                ) : (
                <button onClick={() => dispatch(addToCartThunk(product))}>Adicionar item ao carrinho</button>
            )}
        </Container>

    )
}
export default Product

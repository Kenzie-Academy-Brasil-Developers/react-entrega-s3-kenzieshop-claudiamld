import { useSelector } from "react-redux"
import CartTotal from "../CartTotal"
import Product from "../Product"
import { Container } from "./styles"

export const CartBox = () => {

    const cart = useSelector(({cart}) => cart)

    return(
        <Container>
            <CartTotal />
            {cart.map((product) => (
                <Product key={product.id} product={product} isRemovable></Product>
            ))}
        </Container>

    )
}
export default CartBox
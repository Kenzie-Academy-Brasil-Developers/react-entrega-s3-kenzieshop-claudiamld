import { useSelector } from "react-redux"
import { Container } from "./styles"

const CartTotal = () => {

    const total = useSelector(({cart}) => cart)
    const sum = total.reduce((acc, currValue) => currValue.price + acc, 0)

    return(
        <Container>
            <h1>Total do pedido: R${sum}</h1>
        </Container>
    )
}
export default CartTotal
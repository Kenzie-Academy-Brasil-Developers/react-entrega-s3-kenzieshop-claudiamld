import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Cart from '../pages/Cart'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/carrinho">
                <Cart />
            </Route>
        </Switch>
    )
}
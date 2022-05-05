import BreakingBad from '../../../assets/bb.jpg'
import FightClub from '../../../assets/fight-club.jpg'
import PulpFiction from '../../../assets/pulp-fiction.jpg'
import Tarantino from '../../../assets/tarantino.jpg'

const initialState = [
    {id: 1, name: "Quadro Braking Bad", price: 279, image: BreakingBad},
    {id: 2, name: "Quadro Fight Club", price: 499, image: FightClub},
    {id: 3, name: "Quadro Pulp Fiction", price: 699, image: PulpFiction},
    {id: 4, name: "Quadro Mia Wallace", price: 699, image: Tarantino}

]

const productsReducer = (state = initialState, action) => {
    return state
}
export default productsReducer
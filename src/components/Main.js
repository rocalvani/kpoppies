import {Routes, Route} from "react-router-dom"
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Item from './Item'
import HomeContainer from './HomeContainer'
import Cart from './Cart'

const Main = () => {
    return ( 
        <main className="main">
        <Routes>
        <Route path="/" element={ <HomeContainer/> } />
        <Route path="/checkout" element={ <Cart /> } />
        <Route path="/shop/:id" element={ <ItemListContainer/> } />
        <Route path="/shop/item/:id" element={ <ItemDetailContainer/> } />
        </Routes>
        </main>
    )
}

export default Main;
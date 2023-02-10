import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import HomeContainer from "./HomeContainer";
import CartContainer from "./CartContainer";
import CheckoutContainer from "./CheckoutContainer";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:id" element={<CartContainer />} />
        <Route path="/checkout/:id" element={<CheckoutContainer />} />
        <Route path="/shop/:id" element={<ItemListContainer />} />
        <Route path="/shop/item/:id" element={<ItemDetailContainer />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

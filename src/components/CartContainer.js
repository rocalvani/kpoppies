import CartItemList from "./CartItemList";
import InfoContainer from "./InfoContainer";
import { useCart } from "../context/CartContext";
import NotFound from "./NotFound";

const CartContainer = () => {
  const { cart } = useCart();

  return (
    <section>
      {cart.length == 0 ? (
        <NotFound />
      ) : (
        <div className="main__cart">
          <div className="main__cart--container">
          <CartItemList cart={cart} />
          <InfoContainer /> 
          </div>
        </div>
      )}
    </section>
  );
};

export default CartContainer;

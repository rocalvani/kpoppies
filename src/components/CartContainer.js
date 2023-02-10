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
          <CartItemList cart={cart} />
          <InfoContainer />
        </div>
      )}
    </section>
  );
};

export default CartContainer;

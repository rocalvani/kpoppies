import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalCart, cart } = useCart();

  return (
    <div className="header__cart">
      <div className="header__cart--icon">
        <span className="material-icons">&#xe8cc;</span>
        {cart.length == 0 ? null : (
          <div className="header__cart--noti">{totalCart}</div>
        )}
      </div>
    </div>
  );
};

export default CartWidget;

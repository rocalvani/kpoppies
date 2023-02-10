import { useCheckout } from "../context/CheckoutContext";
import { Link } from "react-router-dom";
import CheckoutList from "./CheckoutList";

const CheckoutContainer = () => {
  const { order, bought } = useCheckout();

  return (
    <div className="main__checkout">
      <div className="main__checkoutContainer">
        <div className="main__checkoutIntro">
          <div className="main__checkoutThanks">
            <h2>Gracias por tu compra, {order.user.name} </h2>
          </div>
          <div className="main__checkoutDesc">
            <p>
              Tu orden del está en camino, y le pusimos nombre.
              <br />
              <b>Ahora se llama {order.id}.</b>
            </p>
          </div>
        </div>
        <CheckoutList bought={bought} />
        <div className="main__checkoutLink">
          <Link to={"/"}>volvé al inicio</Link>
        </div>
        <div className="main__checkoutTotal">
          Total: <b>${order.total}</b>
        </div>
      </div>
    </div>
  );
};
export default CheckoutContainer;

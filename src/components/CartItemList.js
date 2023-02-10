// import {handleclick} from './utils'
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

const CartItemList = ({ cart }) => {
  const { empty } = useCart();

  return (
    <div className="main__cart--cart">
      <div className="main__cartTitle">
        <h2>carrito</h2>
        {cart.length == 0 ? null : (
          <button onClick={empty} className="main__cartTitle--delete">
            borrar todo
          </button>
        )}
      </div>
      <div className="main__cartList">
        {cart.map((el) => (
          <CartItem
            key={el.id}
            name={el.name}
            price={el.price}
            amount={el.amount}
            img={el.img}
            id={el.id}
            version={el.version}
            idol={el.idol}
            stock={el.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;

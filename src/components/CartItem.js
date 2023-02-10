import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const CartItem = (props) => {
  const { delProd, modifyProd, lessProd } = useCart();

  const deleted = () => {
    delProd(props.id);
  };

  const onAdd = (newAmount) => {
    if (newAmount > props.amount) {
      modifyProd(props.id, newAmount);
    } else {
      lessProd(props.id, newAmount);
    }
  };

  return (
    <article className="main__cart--item">
      <div className="main__cart--img">
        <img
          src={"../img/album/" + props.img + ".jpeg"}
          alt=""
          draggable="false"
        />
      </div>
      <div className="main__cart--detail">
        <div className="main__cart--title">
          <h3>{props.name}</h3>
          <h4>{props.idol}</h4>
          <p>versión: {props.version}</p>
        </div>
      </div>
      <div className="main__cart--price">${props.price * props.amount}</div>
      <div className="main__cart--amount">
        <ItemCount
          onAdd={onAdd}
          amount={props.amount}
          stock={props.stock}
          id={props.id}
        />
      </div>
      <button onClick={deleted} className="main__cart--trash">
        <span className="material-icons">&#xe872;</span>
      </button>
    </article>
  );
};

export default CartItem;

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ItemCount = ({ onAdd, amount, stock, id }) => {
  const [counter, setCounter] = useState(amount);
  const params = useParams();

  const { disable } = useCart();

  const handleMinus = () => {
    if (counter == 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    if (counter == stock) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleConfirm = () => {
    onAdd(counter);
  };

  const plus = () => {
    if (stock == counter) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
      onAdd(counter + 1);
    }
  };

  const minus = () => {
    if (counter == 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
      onAdd(counter - 1);
    }
  };

  return (
    <div className="item__count">
      {params.id == "cart" ? (
        <div className="item__count--container">
          <button
            onClick={minus}
            className="item__count--button"
            disabled={counter == 1}
          >
            -
          </button>
          <div className="item__count--counter">{counter}</div>
          <button
            onClick={plus}
            className="item__count--button"
            disabled={counter == stock}
          >
            +
          </button>
        </div>
      ) : (
        <div className="item__count--confirm">
          <div className="item__count--container">
            <button
              onClick={handleMinus}
              className="item__count--button"
              disabled={counter == 1}
            >
              -
            </button>
            <div className="item__count--counter">{counter}</div>
            <button
              onClick={handlePlus}
              className="item__count--button"
              disabled={counter == stock}
            >
              +
            </button>
          </div>
          <button
            onClick={handleConfirm}
            className="item__count--add"
            disabled={disable}
          >
            confirmar
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;

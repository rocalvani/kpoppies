import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const { addProd } = useCart();

  const onAdd = (param) => {
    addProd(
      {
        name: props.name,
        idol: props.idol,
        price: props.price,
        img: props.img,
        id: props.id,
        version: props.version,
        stock: props.stock,
      },
      param
    );
  };

  return (
    <div className="item__container">
      <div className="item__container--img">
        <img src={"/../img/album/" + props.img + ".jpeg"} alt="" width="50%" />
      </div>
      <div className="item__container--desc">
        <div className="item__container--text">
          <div className="item__container--info">
            {props.stock < 10 ? (
              <div className="item__container--stock">
                <b>últimas unidades</b>
              </div>
            ) : null}
            <b>{props.idol}</b>
            <h2>{props.name}</h2>
          </div>

          <div className="item__container--price">
            <p>
              <b>Versión</b>: <br /> {props.version}
            </p>
            <h3>${props.price}/unidad</h3>
          </div>

          <div className="item__container--count">
            <p>Cantidad</p>
            <ItemCount onAdd={onAdd} amount={1} stock={props.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

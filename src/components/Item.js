import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <article className="main__itemCard">
      <div className="main__itemCard--img">
        <img src={"../img/album/" + props.img + ".jpeg"} alt="" />

        <div className="main__itemCard--info">
          <div className="main__itemCard--tag">
            <p>{props.ver} </p>
            <p>
              <b>${props.precio}</b>{" "}
            </p>
            {props.stock < 10 ? (
              <p>
                <b>últimas unidades</b>
              </p>
            ) : null}
          </div>

          <div className="main__itemCard--relevant">
            <h3 className="main__itemCard--title">{props.nombre}</h3>
            <Link to={"/shop/item/" + props.id}>
              <div className="main__itemCard--link">
                <span className="material-icons">&#xe145;</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Item;

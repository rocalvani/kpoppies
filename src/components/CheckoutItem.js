const CheckoutItem = (props) => {
  return (
    <div className="main__checkout--detail">
      <div className="main__checkout--album">
        <img
          src={"../img/album/" + props.img + ".jpeg"}
          alt=""
          draggable="false"
        />
        <div>
          <b>{props.name}</b>
          <br />
          {props.version}
        </div>
      </div>
      <div className="main__checkout--price">${props.price}</div>
    </div>
  );
};

export default CheckoutItem;

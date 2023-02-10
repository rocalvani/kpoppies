import CheckoutItem from "./CheckoutItem";

const CheckoutList = ({ bought }) => {
  const order = bought;

  return (
    <div className="main__checkoutList">
      {order.map((el) => (
        <CheckoutItem
          key={el.id}
          name={el.name}
          img={el.img}
          total={el.total}
          price={el.price}
          version={el.version}
        />
      ))}
    </div>
  );
};

export default CheckoutList;

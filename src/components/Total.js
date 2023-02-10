const Total = (props) => {
  return (
    <div className="main__cart--total">
      <p>SUBTOTAL: </p>
      <p>
        <b>${props.total}</b>
      </p>
    </div>
  );
};

export default Total;

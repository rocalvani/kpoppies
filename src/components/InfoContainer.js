import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";
import { useState } from "react";
import Total from "./Total";

const InfoContainer = () => {
  const navigate = useNavigate();

  const { cart, totalPrice, empty } = useCart();
  const { orderComplete } = useCheckout();

  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState("not required");
  const [id, setId] = useState();
  const [street, setStreet] = useState();
  const [cp, setCp] = useState();
  const [card, setCard] = useState();
  const [cv, setCv] = useState();
  const [payment, setPayment] = useState();
  const [type, setType] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleclick = (e) => {
    const order = {
      user: {
        name: name + lastname,
        email: email,
        id: id,
        address: street + cp,
        card: card,
        cv: cv,
        payment: payment,
      },
      cart: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };

    const sold = collection(db, "venta");
    const req = addDoc(sold, order);

    req
      .then((res) => {
        orderComplete({ ...order, id: res.id });
        navigate("/checkout/" + res.id);
        empty();
      })
      .catch((err) => {
        navigate("/404");
      });
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const handleChangeCp = (e) => {
    setCp(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCard = (e) => {
    setCard(e.target.value);
  };

  const handleChangeCvv = (e) => {
    setCv(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangePayment = (e) => {
    setPayment(e.target.value);
  };

  return (
    <div className="main__cart--info">
      <Total total={totalPrice} />
      <div className="main__cart--data">
        <h3>tus datos</h3>
        <form action="">
          <label>Mail</label>
          <input type="text" placeholder="Mail" onChange={handleChangeEmail} />

          <label>
            Nombre y apellido <span>*</span>
          </label>
          <div className="main__cart--input">
            <input
              type="text"
              placeholder="Nombre"
              className="main__cart--input"
              onChange={handleChangeName}
            />
            <input
              type="text"
              placeholder="Apellido"
              className="main__cart--input"
              onChange={handleChangeLastname}
            />
          </div>

          <label>
            DNI <span>*</span>
          </label>
          <input type="number" placeholder="DNI" onChange={handleChangeId} />

          <div className="main__cart--input">
            <div className="main__cart--flex">
              <label>
                Dirección <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Dirección"
                onChange={handleChangeStreet}
              />
            </div>
            <div className="main__cart--flex">
              <label>
                Código postal <span>*</span>
              </label>
              <input type="text" placeholder="cp" onChange={handleChangeCp} />
            </div>
          </div>

          <label>
            Cómo pagás <span>*</span>
          </label>
          <div className="main__cart--input">
            <select id="cars" name="cars" onChange={handleChangeType}>
              <option value="select">elegí una opción</option>
              <option value="credit">Crédito</option>
              <option value="debit">Débito</option>
            </select>

            {type == "debit" ? (
              <select name="type" onChange={handleChangePayment}>
                <option value="select">elegí una opción</option>
                <option value="one">un pago de ${totalPrice} </option>
              </select>
            ) : (
              <select id="payment" name="cars" onChange={handleChangePayment}>
                <option value="select">elegí una opción</option>
                <option value="three">3 pagos de ${totalPrice / 3} </option>
                <option value="six">6 pagos de ${totalPrice / 6} </option>
                <option value="twelve">12 pagos de ${totalPrice / 12} </option>
              </select>
            )}
          </div>

          <div className="main__cart--input">
            <div className="main__cart--flex">
              <label>
                Número de tarjeta <span>*</span>
              </label>
              <input
                type="number"
                placeholder="tarjeta"
                onChange={handleChangeCard}
              />
            </div>
            <div className="main__cart--flex">
              <label>
                CVV <span>*</span>
              </label>
              <input
                type="number"
                placeholder="cvv"
                onChange={handleChangeCvv}
              />
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={handleclick}
        className="main__cart--submit"
        id="confirm"
        disabled={
          id == undefined ||
          lastname == undefined ||
          card == undefined ||
          cv == undefined ||
          payment == undefined ||
          street == undefined ||
          type == undefined ||
          name == undefined
        }
      >
        {id == undefined ||
        lastname == undefined ||
        card == undefined ||
        cv == undefined ||
        payment == undefined ||
        street == undefined ||
        type == undefined ||
        name == undefined
          ? "Completá todos los campos con un asterísco rojo"
          : "continuar"}
      </button>
    </div>
  );
};

export default InfoContainer;

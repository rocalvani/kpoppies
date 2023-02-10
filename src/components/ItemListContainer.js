import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

import ItemList from "./ItemList";
import LoaderContainer from "./LoaderContainer";
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const [carga, setCarga] = useState(false);
  const [shop, setShop] = useState([]);
  const navigate = useNavigate();

  const place = useParams();

  useEffect(() => {
    const shopCollection = collection(db, "shop");

    if (place.id == "all") {
      const shop = query(shopCollection);
      req(shop);
    } else {
      const shop = query(shopCollection, where("cat", "==", place.id));
      req(shop);
    }

    function req(a) {
      const firestoreReq = getDocs(a);

      firestoreReq
        .then((res) => {
          const shop = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setShop(shop);
          setCarga(true);
        })
        .catch((err) => {
          navigate("/404");
        });
    }
  }, [place]);

  return (
    <section className="main__itemList--container">
      {!carga ? (
        <LoaderContainer msg="vienen cosas buenas" />
      ) : (
        <ItemList shop={shop} />
      )}
    </section>
  );
};

export default ItemListContainer;

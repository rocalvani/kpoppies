import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderContainer from "./LoaderContainer";
import { useNavigate } from "react-router-dom";

import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const ItemDetailContainer = () => {
  const [carga, setCarga] = useState(false);
  const [album, setAlbum] = useState({});
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const shopCollection = collection(db, "shop");
    const ref = doc(shopCollection, params.id);

    const prod = getDoc(ref);

    prod
      .then((res) => {
        const album = res.data();
        setAlbum(album);
        setCarga(true);
      })
      .catch((res) => {
        navigate("/404");
      });
  }, []);

  return (
    <div className="item">
      {!carga ? (
        <LoaderContainer msg="estás más cerca que nunca" />
      ) : (
        <ItemDetail
          name={album.nombre}
          img={album.img}
          idol={album.idol}
          price={album.precio}
          id={params.id}
          version={album.versión}
          stock={album.stock}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;

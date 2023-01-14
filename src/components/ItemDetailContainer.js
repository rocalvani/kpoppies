import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [carga, setCarga] = useState(false);
    const [shop, setShop] = useState([]);
    const params = useParams()

    useEffect(() => {
         fetch("../../json/data.json")
      .then((res) => {
        const shop = res.json()
        return shop
      })
      .then((shop) => {
          setShop(shop);
          setCarga(true);
      })
    }, []);

      let found = shop.find(el => el.id == params.id);

    return (
        <div className="item">
           { !carga ? "Cargando" : <ItemDetail name={found.nombre} img={found.img} idol={found.idol} price={found.precio} />}
        </div>
    )
}

export default ItemDetailContainer;
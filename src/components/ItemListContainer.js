import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [carga, setCarga] = useState(false);
  const [shop, setShop] = useState([]);

  const place = useParams()

  useEffect(() => {
    setTimeout(() => {
      
      fetch("../json/data.json")
      .then((res) => {
        const shop = res.json()
        return shop
      })
      .then((shop) => {
        if (place.id == "bg") {
          const boy = shop.filter(el => el.cat == "bg");
          setShop(boy);
        } else if (place.id == "gg") {
          let girl = shop.filter(el => el.cat == "gg");
          setShop(girl);
        } else {
          setShop(shop);};
          setCarga(true);
      })
    }, 1000);
    
  }, [place]);

  return (
    <div>
      {!carga ? "Cargando" : <ItemList shop={shop}/>}
    </div>
  );
};

export default ItemListContainer;

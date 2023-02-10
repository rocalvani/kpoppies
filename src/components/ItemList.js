import Item from "./Item";

const ItemList = ({ shop }) => {
  return (
    <div className="main__itemGrid">
      {shop.map((el) => (
        <Item
          nombre={el.nombre}
          id={el.id}
          img={el.img}
          precio={el.precio}
          ver={el.versión}
          key={el.id}
          stock={el.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;

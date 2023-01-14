
import Item from './Item'

const ItemList = ({shop}) => {

       return (
        <div className="main__itemGrid">{shop.map((el) => (
            <article key={el.id}>
            
            <Item 
            nombre={el.nombre} 
            id={el.id} 
            img={el.img} 
            precio={el.precio}
            ver={el.versión}
             />
            
            </article>
            
            ))}</div>
       )

}

export default ItemList;
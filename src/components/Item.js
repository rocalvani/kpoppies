import {Link} from 'react-router-dom'

const Item = (props) => {

return (
    <div className="main__itemCard">
        <div className="main__itemCard--img">
        <img src={"../img/album/" + props.img + ".jpeg"} alt=""/>
        </div>
       <div className="main__itemCard--info">
       <div className="main__itemCard--tag">
       <p>{props.ver} </p>
       </div>
       <h3>{props.nombre}</h3>
       <p>${props.precio} </p>
       </div>
       <Link to={"/shop/item/" + props.id}><div className="main__itemCard--link">
       lo quiero
       </div></Link>
    </div>
)

}


export default Item;
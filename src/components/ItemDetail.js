import {Link} from 'react-router-dom'

const ItemDetail = (props) => {

    return (
        <div className="item__container">
        <div className="item__container--img">
        <img src={"/../img/album/" + props.img + ".jpeg"} alt="" width="50%"/>
        </div>
        <div className="item__container--desc">
            <div className="item__container--text">
            <h2> <b>{props.idol}</b> - {props.name}</h2>
            <h3>${props.price}</h3>
            </div>
                        <Link to={"/checkout"}><div className="item__container--link">
       pa' casa
       </div></Link>
        </div>
        </div>
    )
}

export default ItemDetail;
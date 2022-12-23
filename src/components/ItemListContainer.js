import {useState} from "react";

const ItemListContainer = (props) => {
    return(

<div style={{marginLeft: 50}} className="list__container">{props.greeting}</div>
    )
}

export default ItemListContainer;
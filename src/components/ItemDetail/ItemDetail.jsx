import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, name, stock}) =>{
    const hundleOnAdd = (quatity) => {
        console.log(quatity)
    }

    return(
        <div style={{fontSize: "40px"}}>
        <p>id: {id}</p>
        <h2>{name}</h2>
        <ItemCount stock={stock} initial={1} onAdd={hundleOnAdd}></ItemCount>
        </div>
    )
}

export default ItemDetail
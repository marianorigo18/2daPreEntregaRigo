import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMocks"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams();
    useEffect(()=>{
        getProductsById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(err => {
            console.log(err)
        })  
        .finally(()=>{
            setLoading(false)
        })
    },[productId])

    if(loading){
        return <h2>cargando espere un momento...</h2>
    }
    
    return(
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", border: "1px solid"}}>
            <h1>Hello i´m item detail container</h1>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMocks"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams();
    console.log(productId)
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
        <div style={{display: "flex", justifyContent: "center"}}>
            <h1>Hello i´m item detail container</h1>
            <div style={{fontSize: "40px"}}>
                <p>{product.id}</p>
                <h2>{product.name}</h2>
            </div>
        </div>
    )
}
export default ItemDetailContainer
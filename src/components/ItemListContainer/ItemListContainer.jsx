import { useState, useEffect } from "react"
import {getProducts, getProductsByCategory} from "../../asyncMocks"
import { useParams, Link } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();
    console.log(categoryId)
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])
    if(loading){
        return <h1>cargando...</h1>
    }
    return (
    <div>
        <h1>saludo</h1>
        <div>
            {products.map((prod) => {
                return(
                    <div key={prod.id}>
                        <p>{prod.name}</p>
                        <Link to={`/item/${prod.id}`}>ver detalle</Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ItemListContainer
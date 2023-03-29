import { useState, useEffect } from "react"
import {getProducts} from "../../asyncMocks"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
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
                        <button>ver detalle</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ItemListContainer
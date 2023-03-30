import { useState } from "react"

const ItemCount =({stock,initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }
    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1) 
    }

    return(
        <div>
            <h1>cantidad :{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onAdd(count)}>agregar al carrito</button>
        </div>
    )
}
export default ItemCount
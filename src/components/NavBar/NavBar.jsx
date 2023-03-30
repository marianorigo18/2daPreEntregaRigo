import { useEffect, useState } from "react"
import { getCategories } from "../../asyncMocks"
import { Link } from "react-router-dom"
const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories()
    .then(response => {
      setCategories(response)
    })
  },[])


  return (
    <div>
      <Link to={"/"}>Ecommerce</Link>
      <div>
          {categories.map(cat =>{
            return(
              <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.description}</Link>
            )
          })}
      </div>
    </div>
  )
}

export default NavBar
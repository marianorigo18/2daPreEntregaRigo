const products = [
    {
        id: "1",
        name: "contactor",
        category: "contactores",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    },
    {
        id: "2",
        name: "termica 2 a",
        category: "termica",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    }
]

export const getProducts = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=> {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}
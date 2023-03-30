const products = [
    {
        id: "1",
        name: "contactor 2A",
        category: "contactores",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    },
    {
        id: "3",
        name: "contactor 3A",
        category: "contactores",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    },
    {
        id: "2",
        name: "termica 2A",
        category: "termicas",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    },
    {
        id: "4",
        name: "termica 10A",
        category: "termicas",
        stock: 25,
        description: "lorem ipsum tajuni jare ra ju"
    }
]

const category = [
    {
        id: "1", 
        description: "Contactores",
        slug: "contactores"
    },
    {
        id: "2", 
        description: "Termicas",
        slug: "termicas"
    },
]
export const getCategories = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(category)
        },500)
    })
}

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
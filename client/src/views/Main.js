import {useState} from 'react'
import axios from 'axios'
import {ProductForm} from '../components/ProductForm'
import {ProductList} from '../components/ProductList'

export const Main = () => {
    const [products, setProducts] = useState([])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
        .then(response => {
            console.log(response)
            console.log(response.data)
            setProducts([...products, response.data])
        })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <ProductForm products={products} setProducts={setProducts} onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

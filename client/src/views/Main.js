import {useState} from 'react'
import axios from 'axios'
import {ProductForm} from '../components/ProductForm'
import {ProductList} from '../components/ProductList'

export const Main = () => {
    const [products, setProducts] = useState([])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

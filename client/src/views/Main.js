import {useState} from 'react'
import axios from 'axios'
import {ProductForm} from '../components/ProductForm'
import {ProductList} from '../components/ProductList'

export const Main = (props) => {
    const [products, setProducts] = useState([])
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

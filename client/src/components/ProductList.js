import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col items-center w-96 rounded">
            <ul>
                {
                    products?.map((product, index) => 
                        <li key={index} className="border rounded p-2 mb-2">
                            <Link to={`/products/${product._id}`} className="font-bold hover:text-gray-300">{product.title}</Link>
                            <p>${product.price}</p>
                            <p className="text-sm mb-2">{product.description}</p>
                            <Link to={`/products/edit/${product._id}`} className="text-sm bg-green-300 p-1 border border-black rounded hover:bg-green-500 hover:font-bold hover:text-red-900">Edit {product.title}</Link>
                            <button className="ml-3 text-sm bg-red-300 p-1 border border-black rounded hover:bg-red-500 hover:font-bold hover:text-green-200" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

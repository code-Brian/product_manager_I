import {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

export const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="bg-slate-400 border rounded p-2 mb-2 w-96">
            <h2 className="font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to={'/home'} className="font-bold hover:text-gray-300">Home</Link>
        </div>
    )
}

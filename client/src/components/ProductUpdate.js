import {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import {ProductForm} from '../components/ProductForm'
import {ProductDelete} from '../components/ProductDelete'

export const ProductUpdate = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()
    
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            setProduct(response.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    },[])

    const updateProduct = productParam => {
        axios.put(`http://localhost:8000/api/products/${id}`, productParam)
        .then(response => {
            console.log(response)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col justify-center items-center w-96 rounded">
            <h2 className="font-bold">Update Product</h2>
            {
                loaded && (
                    <>
                        <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
                        <ProductDelete productId={product._id} successCallBack={()=>navigate('/home')}/>
                    </>
                )
            }
            <Link to={'/home'} className="font-bold hover:text-gray-300">Home</Link>
        </div>
    )
}

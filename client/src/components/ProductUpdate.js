import {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'

export const ProductUpdate = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
        })
        .catch(err => console.log(err))
    },[])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then(response => {
            console.log(response)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="bg-slate-500 mt-3 p-3 flex flex-col justify-center items-center w-96 rounded">
            <h2 className="font-bold">Update Product</h2>
            <form onSubmit={updateProduct} className="mx-auto p-2 flex flex-col content-center justify-center w-80">
                <div className="flex items-center justify-between">
                    <label className="mr-2">Title:</label>
                    <input className="mb-1 px-2 border rounded" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="flex items-center justify-between">
                    <label  className="mr-2">Price:</label>
                    <input className="mb-1 px-2 border rounded" type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="flex items-center justify-between">
                    <label className="mr-2">Description:</label>
                    <textarea className="mb-1 px-2 border rounded" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <input className="self-center mt-3 w-32 bg-zinc-400 hover:bg-zinc-200 hover:text-black hover:cursor-pointer text-gray-50 px-2 border rounded" type="submit" value="Update Product"></input>
            </form>
            <Link to={'/home'} className="font-bold hover:text-gray-300">Home</Link>
        </div>
    )
}

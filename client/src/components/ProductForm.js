import {useState} from 'react'
import axios from 'axios'

export const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res)
            console.log(res.data)
            setProducts([...products, res.data])
        })
        .catch(err=>console.log(err))
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div>
            <div className="bg-slate-500 mt-3 p-3 flex flex-col items-center w-96 rounded">
                <h2 className="font-bold">Create New Product</h2>
                <form onSubmit={onSubmitHandler} className="mx-auto p-2 flex flex-col content-center justify-center w-80">
                    <div className="flex items-center justify-between">
                        <label className="mr-2">Title:</label>
                        <input className="mb-1 px-2 border rounded" type="text" onChange={handleTitle}></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="">Price:</label>
                        <input className="mb-1 px-2 border rounded" type="text" onChange={handlePrice}></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="">Description:</label>
                        <textarea className="mb-1 px-2 border rounded" onChange={handleDescription}></textarea>
                    </div>
                    <input className="self-center mt-3 w-32 bg-zinc-400 hover:bg-zinc-200 hover:text-black hover:cursor-pointer text-gray-50 px-2 border rounded" type="submit" value="Create Product"></input>
                </form>
            </div>
        </div>
    )
}

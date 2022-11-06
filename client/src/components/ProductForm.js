import {useState} from 'react'

export const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({title, price, description})
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
                        <input className="mb-1 px-2 border rounded" type="text" name="title" value={title} onChange={handleTitle}></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="">Price:</label>
                        <input className="mb-1 px-2 border rounded" type="text" name="price" value={price} onChange={handlePrice}></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="">Description:</label>
                        <textarea className="mb-1 px-2 border rounded" name="description" value={description} onChange={handleDescription}></textarea>
                    </div>
                    <input className="self-center mt-3 w-32 bg-zinc-400 hover:bg-zinc-200 hover:text-black hover:cursor-pointer text-gray-50 px-2 border rounded" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

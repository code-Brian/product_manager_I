import axios from 'axios'

export const ProductDelete = (props) => {
    const {productId, successCallBack} = props

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(response => successCallBack())
        .catch(err => console.log(err))
    }
    return (
        <button className="ml-3 text-sm bg-red-300 p-1 border border-black rounded hover:bg-red-500 hover:font-bold hover:text-green-200" onClick={deleteProduct}>Delete</button>
    )
}

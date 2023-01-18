import React, { useContext,useState } from 'react'
import Formcontext from '../context/formcontext'


export default function Product() {
    const context = useContext(Formcontext)
    const {arr,setArr} = context
  
    let [productDetail, setproductDetail] = useState({ product: "", pamount: "" })
    const handle = (e) => {
        e.preventDefault()

        setArr(arr.concat(productDetail))
        setproductDetail({ product: "", pamount: "" })
        
    }

    const onChange = (e) => {
        setproductDetail({ ...productDetail, [e.target.name]: e.target.value })
    }
    return (
        <div className='product'>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example" id='product' name='product' value={productDetail.product} onChange={onChange}>
                    <option defaultValue>Product</option>
                    <option value="Televison">Television</option>
                    <option value="WashingMachine">Washing machine</option>
                    <option value="Refrigerator">Refrigerator</option>
                    <option value="AirConditionar">Air conditionar</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="pamount" className="form-label">Product amount*</label>
                <input  type="text" className="form-control" id="pamount" name='pamount' aria-describedby="emailHelp" value={productDetail.pamount} onChange={onChange} />
            </div>
            <button onClick={handle} className="btn btn-primary mb-3">Add</button>

        </div>
    )
}

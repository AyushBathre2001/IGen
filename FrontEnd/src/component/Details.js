import React, { useState,useContext } from 'react'
import Product from './Product'
import Formcontext from '../context/formcontext'
import { useNavigate } from "react-router-dom";

export default function Details(){
    const Navigate = useNavigate()

    const context = useContext(Formcontext)
    const {setcd} = context
    const[detail,setDetail] = useState({name:"",number:"",amount:""})

    const onChange = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }

    const handleForm = (e)=>{
        e.preventDefault()
        
        setcd({name:detail.name,number:detail.number,amount:detail.amount})
        Navigate('/bill')

    }
    return (
        <div className='main'>
            <div className="form mt-2">
                <h2 className='mt-3'>Invoice Generator</h2>
                <form onSubmit={handleForm} >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name*</label>
                        <input required minLength={5} type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} value = {detail.name}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Phone*</label>
                        <input required minLength={10} maxLength = {10} type="text" className="form-control" id="number" name='number' aria-describedby="emailHelp"  onChange={onChange} value = {detail.number}/>
                    </div>
               
                    <Product/>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Total amount*</label>
                        <input required type="text" className="form-control" id="amount" name='amount' aria-describedby="emailHelp" onChange={onChange} value = {detail.amount}/>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label required className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
                    </div>
                    <button type="submit" className="btn btn-success mb-4">Submit</button>
                </form>
            </div>
        </div>
    )
}

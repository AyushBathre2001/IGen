import React from 'react'
import { jsPDF } from "jspdf";
import { useContext } from 'react';
import Formcontext from '../context/formcontext';
import png from '../Images/png.png'

export default function Bill(props) {
  const context = useContext(Formcontext)
  const { arr, cd } = context


  const makePDF = () => {
    var doc = new jsPDF('0.5', 'mm', [870, 900]);
    const element = document.querySelector(".bill")
    // Source HTMLElement or a string containing HTML.
    doc.html(element, {
      callback: function (doc) {
        doc.save(`${cd.name}_invoice.pdf`);
      },
      x: 10,
      y: 10
    });

  }


  const saveData = async () => {
    const response = await fetch("http://localhost:5500/bill/customer/save", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('Token')
      },

      body: JSON.stringify({ "name": cd.name, "number": cd.number, "products": arr, "amount": cd.amount })// body data type must match "Content-Type" header
    });


    makePDF()
  }



  return (
    <>
      <div className="bill_container">

        <div className='bill'>
          <div className="headline">
            <div className="invoice">
              <h1>INVOICE</h1>
              <div className="datebox">
                <h4>Invoice number - {Math.floor(Math.random() * 899999 + 100000)}</h4>
                <h4>Date - {new Date(Date.now()).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</h4>
              </div>
            </div>
            <div className="logo">
              <img src={png} alt="" style={{ width: '70px' }} />
            </div>
          </div>
          <div className="cus_com">
            <div className="cus_box">
              <h4 style={{ fontWeight: 'bold' }}>Billed to</h4>
              <p>{cd.name}</p>
              <p>{cd.number}</p>


            </div>
            <div className="com_box">
              <h4 style={{ fontWeight: 'bold' }}>Sell by</h4>
              <p>xyz company</p>
              <p>address</p>
              <p>phone number</p>
              <p>email address</p>
            </div>

          </div>
          <div className="pheadline mt-5">
            <h4>Product</h4>
            <h4>Amount</h4>

          </div>
          <div className="product_details mt-1">

            {arr.map((element) => {

              return <div className="pdescription">
                <p>{element.product}</p>
                <p>{element.pamount} /-</p>
              </div>


            })}



          </div>

          <div className="total mt-5">
            <h5 style={{ backgroundColor: 'gray', width: '250px', padding: '10px', color: 'white' }}>Total - {cd.amount} /-</h5>
            <h6>Signature of authorized person.</h6>
          </div>
        </div>
        <button className='btn btn-success my-3' onClick={saveData}>Generate</button>
      </div>
    </>
  )
}


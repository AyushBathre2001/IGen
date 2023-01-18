import React from 'react'
import iv from '../Images/iv.jpg'
import { useNavigate } from 'react-router-dom'
import Details from './Details'

export default function Home() {
    const Navigate = useNavigate()


    const getLogin = () => {
        Navigate('/login')
    }
    return (

        <>
            {localStorage.getItem('Token') ? <Details /> : <div className='home'>
            <div className="side"></div>
            <div className="left">
                <div className="text">

                    <h1>IGen</h1>
                    <h4>Generates invoice in pdf form.</h4>
                    <p>Get smart invoicing with time tracking software that helps you run your business better.</p>
                    <button onClick={getLogin} className='mt-3'>Login</button>
                </div>
            </div>
            <div className="right">
                <img src={iv} alt="" />
            </div>
        </div>}

        </>
    )
}

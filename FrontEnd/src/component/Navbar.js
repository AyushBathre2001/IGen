import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const Navigate = useNavigate()
    const setLogout = () => {
        localStorage.removeItem('Token')
        Navigate('/')
    }
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">IGen</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">Contact</Link>
                            </li>


                        </ul>
                        {localStorage.getItem('Token') ? <div className="nav-item">
                            <button onClick={setLogout} className='btn btn-danger mx-3'>Logout</button>
                        </div> : <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        }

                    </div>
                </div>
            </nav>
        </div>
    )
}

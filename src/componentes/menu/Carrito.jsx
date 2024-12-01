import React, { useState } from 'react'
import { Bag2, User } from 'react-iconly'
import './carrito.css';

import { Link } from 'react-router-dom';


const Carrito = ({ setIsComponentVisible }) => {
    const [modalCarrito, setModalCarrito] = useState(false)
    const abirModal = () => {
        setModalCarrito(!modalCarrito)
    }

    return (
        <div className='carrito-compra-container'>
            <div className="carrito-compra" onClick={abirModal}>
                <Bag2 set="light" size={30} />
                <div className='contador-numero'><p>2</p></div>
            </div>
            <Link to="/perfil" className='d-flex align-items-center' onClick={() => setIsComponentVisible(false)}>
                <div className="carrito-compra carrito-usuario">
                    <User set="light" size={28} />
                </div>
                <span className='text-white'>Diego</span>
            </Link>

        </div >
    )
}

export default Carrito
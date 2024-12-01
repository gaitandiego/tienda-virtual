import React, { useState } from 'react'
import { MDBIcon } from 'mdbreact'
import Productos from '../../componentes/productos/Productos'

const Tienda = () => {
    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || [])

    const [categorias, setCategorias] = useState([
        {
            id: 1,
            nombre: 'Categoría 1',
            seleccionado: true
        },
        {
            id: 2,
            nombre: 'Categoría 2',
        },
        {
            id: 3,
            nombre: 'Categoría 3',
        },
        {
            id: 4,
            nombre: 'Categoría 4',
        },
        {
            id: 5,
            nombre: 'Categoría 5',
        }
    ])

    const [enlacesInteres, setEnlacesInteres] = useState([{
        id: 1,
        nombre: 'Enlace 1',
        seleccionado: true
    },
    {
        id: 2,
        nombre: 'Enlace 2',
    },
    {
        id: 3,
        nombre: 'Enlace 3',
    },
    {
        id: 4,
        nombre: 'Enlace 4',
    }])
    const [verMas, setVerMas] = useState(false)

    return (
        <>
            <div className='banner-pagina-individual'>
                <p>TIENDA</p>
            </div>
            <div className='tienda row'>
                <div className='tienda_menu col-md'>
                    <form >
                        <div className='tienda_buscar'>
                            <h5>BUSCAR</h5>
                            <div className="input-group form-sm form-1 pl-0">
                                <input
                                    className="form-control my-0 py-1"
                                    type="text"
                                    placeholder="Buscar Producto"
                                    aria-label="Buscar"
                                />
                                <div className="input-group-prepend">
                                    <button className="input-group-text black lighten-3" type='submit'>
                                        <MDBIcon className="text-white" icon="search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className='tienda_categorias'>
                        <h5>CATEGORÍAS</h5>
                        <div className='tienda-categorias_lista'>
                            <ul className={!verMas ? 'tienda-categorias_lista_items' : 'mb-0'}>
                                {categorias && categorias.map(categoria => (
                                    <li className={categoria.seleccionado ? 'categoria-seleccionada' : ''} key={categoria.id}>{categoria.nombre}</li>
                                ))}
                            </ul>
                            <ul>
                                <li className='tienda-categorias-bold' onClick={() => setVerMas(!verMas)}>{!verMas ? 'Ver más...' : 'Ver menos...'}</li>
                            </ul>
                        </div>
                    </div>

                    <div className='tienda_categorias'>
                        <h5>ENLACES DE INTERES</h5>
                        <ul>
                            {enlacesInteres && enlacesInteres.map(enlace => (
                                <li key={enlace.id}>{enlace.nombre}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='tienda-productos col-md-9'>
                    <Productos productos={productos} />
                </div>
            </div>
        </>
    )
}

export default Tienda
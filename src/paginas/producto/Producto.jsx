import { faCartShopping, faClock, faGift, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useParams } from 'react-router-dom';

const Producto = () => {
    const { productoId } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        const productos = JSON.parse(localStorage.getItem('productos'))

        const producto = productos.find(producto => producto.id === productoId)

        if (producto) {
            setProducto(producto)
        }
        setCargando(false)
    }, [])

    if (cargando) return <div className='row producto-item justify-content-center '><div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
    </div></div>

    if (!productoId || !producto) return <div className='row producto-item justify-content-center '><p>El producto que buscas no existe o caduco</p></div>

    return (
        <>
            <div className='banner-pagina-individual'>
                <p>PRODUCTO</p>
            </div>
            <div className='row producto-item'>
                <div className='col-md'>
                    <MDBCarousel activeItem={1} dark="true" length={3} showControls={true} showIndicators={true} thumbnails >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId={1}>
                                <img className="d-block img-fluid" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="First slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={2}>
                                <img className="d-block img-fluid" src="https://img.freepik.com/fotos-premium/productos-belleza-flores-rosas-sobre-fondo-rosa-suave-productos-cosmeticos-cuidado-piel_656098-652.jpg" alt="First slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={3}>
                                <img className="d-block img-fluid" src="https://img.freepik.com/fotos-premium/producto-belleza-cuidado-piel_946209-6411.jpg" alt="First slide" />
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <div className='col-md'>
                    <h5>{producto.nombre}</h5>
                    <p>{producto.descripcion}</p>

                    <div className='informacion-envio'>
                        <div className='informacion-envio-item'>
                            <FontAwesomeIcon icon={faTruck} />
                            <span> Envios a todo el País</span>
                        </div>
                        <div className='informacion-envio-item'>
                            <FontAwesomeIcon icon={faGift} />
                            <span> Regala Calidad</span>
                        </div>
                        <div className='informacion-envio-item'>
                            <FontAwesomeIcon icon={faClock} />
                            <span> Tiempo de envio 3 a días</span>
                        </div>
                    </div>
                    <NumericFormat className='informacion-envio-precio' displayType="text" value={producto.precio} prefix={'$'} thousandSeparator={true} />

                    <div className='informacion-anadir'>
                        <select className='btn'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                        <button className='btn boton_estandar rounded-0'><FontAwesomeIcon icon={faCartShopping} /> AÑADIR AL CARRITO </button>
                    </div>
                    <hr />
                    <div className='informacion-comprar-ahora'>
                        <button className='btn boton_estandar btn-rounded'><FontAwesomeIcon icon={faCartShopping} /> COMPRAR AHORA </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Producto;
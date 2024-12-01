import { MDBNavItem, MDBNavbarNav } from 'mdbreact'
import React from 'react'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import imagenFooter from '../../assets/images/logo.png';

import { Link } from "react-router-dom";

const Footer = () => (
    <div className='footer-container'>
        <div className='footer row'>
            <div className='footer_item footer-image-container col-md'>
                <img
                    className={`img-fluid`}
                    src={imagenFooter}
                    width={300}
                />
            </div>
            <div className='footer_item col-md'>
                <div className='container'>
                    <MDBNavbarNav>
                        <MDBNavItem >
                            <Link className="nav-link waves-effect waves-light" to="/" >Inicio</Link>
                        </MDBNavItem>
                        <MDBNavItem >
                            <Link className="nav-link waves-effect waves-light" to="/subir-producto" >Subir Producto</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </div>

            </div>
            <div className='footer_item col-md'>
                <div className='container'>
                    <p className='nav-link'>Contácto </p>
                    <MDBNavbarNav right >
                        <MDBNavItem className="mr-4 font-weight-bold">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span> 36-099 Main St xxx, xxx xxx</span>
                        </MDBNavItem>
                        <MDBNavItem className="mr-4 font-weight-bold" >
                            <FontAwesomeIcon icon={faPhone} />
                            <span> (xxx) xxx xxx</span>
                        </MDBNavItem>
                        <MDBNavItem className="mr-4 font-weight-bold" >
                            <FontAwesomeIcon icon={faInstagram} />
                            <span> @xxxxx</span>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </div>

            </div>
        </div>
        <div className='footer-derechos'>
            Todos los derechos reservados © copyrigth 2024 - Desarrollado por Diego Gaitan
        </div>
    </div>
)


export default Footer
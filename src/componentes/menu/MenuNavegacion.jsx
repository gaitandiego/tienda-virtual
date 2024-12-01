import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import imagenMenu from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import HeaderNav from "../../helpers/HeaderNav";

const MenuNavegacion = () => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = HeaderNav(false);

    const toggleCollapse = () => {
        setIsComponentVisible(true);
    };

    return (
        <div className="menu-navegacion-componente" ref={ref}>
            <MDBNavbar className="menu-navegacion-componente-font" dark expand="md">
                <MDBNavbarNav left>
                    <MDBNavItem className="mr-4">
                        <FontAwesomeIcon icon={faPhone} />
                        <span> (xxx) xxx xxx</span>
                    </MDBNavItem>
                    <MDBNavItem className="mr-4">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span> 36-099 Main St xxx, xxx xxx</span>
                        <span className="font-weight-bold">@xxxxxx</span>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>

            <MDBNavbar className="menu-container" dark expand="md">
                <MDBNavbarBrand>
                    <Link to="/">
                        <img src={imagenMenu} height={40} alt="Logo" />
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />

                <MDBCollapse id="navbarCollapse3" isOpen={isComponentVisible} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link onClick={() => setIsComponentVisible(false)} className="nav-link waves-effect waves-light" to="/">Inicio</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link onClick={() => setIsComponentVisible(false)} className="nav-link waves-effect waves-light" to="/subir-producto">Subir Producto</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <div>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                <Carrito setIsComponentVisible={setIsComponentVisible} />
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </div>
                </MDBCollapse>
            </MDBNavbar>
        </div>
    );
};

export default MenuNavegacion;

import React from 'react'
import { MDBBtn, MDBCol, MDBRow } from 'mdbreact'
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ProductoCard = ({ producto }) => {
    const navigate = useNavigate()

    const { imagen, nombre, precio, id } = producto
    return (
        <MDBCol className='col-6 col-md-4'>
            <div className='producto-componente view overlay zoom'>
                <img
                    className="card-img-top"
                    src={"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"}
                    alt="First slide"
                    onClick={() => navigate('/producto/' + id)}
                />

                <h5 className="card-title">{nombre}</h5>
                <NumericFormat
                    className="card-text"
                    value={precio}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    prefix="$"
                />

                <MDBBtn color="purple" onClick={() => { }} rounded>Añadir al carrito</MDBBtn>
            </div>
        </MDBCol >
    )
}




const Productos = ({ productos }) => (
    <>
        <MDBRow>
            {productos && productos.length > 0 ? productos.map(producto => <ProductoCard producto={producto} key={producto.id} />) :
                <MDBCol>
                    <div className='producto-componente view overlay zoom'>
                        No se encuentra productos
                    </div>
                </MDBCol>}
        </MDBRow>
        <hr />
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
    </>
)


export default Productos
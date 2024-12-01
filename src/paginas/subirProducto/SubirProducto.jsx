import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { Controller, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { v4 as uuidv4 } from 'uuid';

const SubirProducto = () => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
    const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')) || [])
    const [datosChart, setDatosChart] = useState([])

    useEffect(() => {
        const precios = productos.reduce((acc, producto) => {
            const precio = parseInt(producto.precio);
            if (acc[precio]) {
                acc[precio] += 1;
            } else {
                acc[precio] = 1;
            }
            return acc;
        }, {});

        const datos = Object.entries(precios).map(([precio, cantidad]) => {
            const precioFormateado = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(precio);
            const precioSinEspacio = precioFormateado.replace(/\s/g, '');
            return [precioSinEspacio, cantidad];
        });

        setDatosChart([["Precio", "Cantidad"], ...datos]);
    }, [productos])


    const onSubmit = data => {
        const nuevosProductos = [...productos, { ...data, id: uuidv4() }];
        setProductos(nuevosProductos);
        localStorage.setItem('productos', JSON.stringify(nuevosProductos));
        reset({
            nombre: "",
            descripcion: "",
            precio: null
        });
    }

    const opcionesChart = {
        title: "Cantidad de productos por precio",
        is3D: true,
        format: {
            currency: {
                style: 'currency',
                currency: 'COP',
            }
        },
    };

    return (
        <>
            <div className='banner-pagina-individual'>
                <p>SUBIR PRODUCTO</p>
            </div>
            <MDBContainer className='mt-5 mb-5'>
                <MDBRow>
                    <MDBCol md="8">
                        <h5>Tabla de productos</h5>
                        <MDBTable bordered>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Descipción</th>
                                    <th>Precio</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {productos && productos.length > 0 ? productos.map((producto, index) => (
                                    <tr key={producto.id}>
                                        <td>{index + 1}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.descripcion}</td>
                                        <td><NumericFormat
                                            value={producto.precio}
                                            displayType="text"
                                            thousandSeparator="."
                                            decimalSeparator=","
                                            prefix="$"
                                        />
                                        </td>
                                    </tr>))
                                    : <tr>
                                        <td className='text-center' colSpan={4}>No existe productos</td>
                                    </tr>
                                }

                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p className="h5 text-center mb-4">Subir Producto</p>
                                    <MDBRow>
                                        <MDBCol md="12" className="mb-3">
                                            <label
                                                htmlFor="defaultFormRegisterNameEx"
                                                className="grey-text"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                {...register("nombre", { required: true })}
                                                name="nombre"
                                                type="text"
                                                className={`form-control ${errors.nombre && 'is-invalid'}`}
                                                placeholder="Nombre"
                                            />
                                        </MDBCol>
                                        <MDBCol md="12" className="mb-3">
                                            <label
                                                htmlFor="defaultFormRegisterEmailEx2"
                                                className="grey-text"
                                            >
                                                Descripción
                                            </label>
                                            <textarea
                                                {...register("descripcion", { required: true })}
                                                name="descripcion"
                                                type="text"
                                                className={`form-control ${errors.descripcion && 'is-invalid'}`}
                                                placeholder="Descripción"
                                            />
                                        </MDBCol>
                                        <MDBCol md="12" className="mb-3">
                                            <label
                                                htmlFor="defaultFormRegisterConfirmEx3"
                                                className="grey-text"
                                            >
                                                Precio
                                            </label>

                                            <Controller
                                                control={control}
                                                name="precio"
                                                rules={{ required: true }}
                                                render={({ field }) => <NumericFormat
                                                    className={`form-control ${errors.precio && 'is-invalid'}`}
                                                    prefix="$"
                                                    thousandSeparator={true}
                                                    placeholder="Precio"
                                                    onValueChange={(values) => field.onChange(values.floatValue)}
                                                    value={field.value || ''}
                                                />}
                                            />

                                        </MDBCol>
                                    </MDBRow>

                                    <div className="text-center mt-3">
                                        <MDBBtn type="submit" color="purple" rounded>Subir</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6" className="text-center mt-5">
                        <Chart
                            chartType="PieChart"
                            data={datosChart}
                            options={opcionesChart}
                            width={"100%"}
                            height={"400px"}
                        />
                    </MDBCol>
                    <MDBCol md="6" className="text-center mt-5">
                        <div className="card-fecha-entrega ">
                            <p className="titulo text-left">Fecha de entrega del proyecto</p>
                            <p className="tiempo text-right">0:00 - 23:55</p>
                            <div className="fecha">
                                <span className="mes">Diciembre</span>
                                <span className="dia">10</span>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>

    )
}

export default SubirProducto
import React from "react"
import { Link } from "react-router-dom"
import { Producto } from "../interfaces/interfaces"
import './ProductsPage.css'

export interface Props {
    productoArray: Producto[] | null

}
// Muestra en tabla todos los productos (solo los nombres)
export const ProductosPage: React.FC<Props> = ({ productoArray }) => {

    return (
        <div className="Tabla">
            {
                productoArray?.length === 0 &&
                <h3 className="alert alert-danger">Cargando productos</h3>
            }
            {
                productoArray!.length > 0 &&

                <div className="Tabla-responsive">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productoArray?.map((producto, index) =>
                                    <tr key={index} >
                                        <td> <Link to={`/${producto.id}`}>{producto.nombre}</Link></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            }
        </div>
    )
}
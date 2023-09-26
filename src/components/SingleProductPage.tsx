import './SingleProductPage.css'
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../state/hooks"
import { useEffect } from 'react'
import { getProductosById } from "../state/productoSlice"
import { Link } from "react-router-dom"


export const SingleProductoPage = () => {

    const dispatch = useAppDispatch()
    const { singleProducto } = useAppSelector(state => state.producto) // se subscribe para obtener el estado de singleProducto en productoSlice.tsx
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            alert("Null id")
            return;
        }
        dispatch(getProductosById(id))
    }, [])

    return (
        <div className="SingleProductoPage">
            <div className="jumbotron">
                <>
                    <h3> Producto: {singleProducto?.nombre}</h3>
                    <hr></hr>
                    <br></br>
                    <h6>{singleProducto?.descripcion}</h6>
                    <h6><u>Precio:</u> {singleProducto?.precio}</h6>
                    <h6><u>Stock:</u> {singleProducto?.stock}</h6>
                    <br></br>
                    <h5> <img src={singleProducto?.foto + '?' + Math.random()} width={250} alt={singleProducto?.nombre} /></h5>
                    <br></br>
                    <Link to={`/editProductPage/${singleProducto?.id}`}>
                        <button className="btn btn-info mt-3 mr-3">
                            Editar
                        </button>
                    </Link>
                </>
            </div>
        </div>
    )
}
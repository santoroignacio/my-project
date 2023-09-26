import { useAppDispatch, useAppSelector } from "../state/hooks"
import { useEffect, useState } from 'react';
import { deleteProductos, getProductosById, updateProductos } from "../state/productoSlice";
import { useNavigate, useParams } from "react-router";
import './EditProductPage.css'


export const EditProductPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { singleProducto } = useAppSelector(state => state.producto)// se subscribe para obtener el estado de singleProducto en productoSlice.tsx
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            return;
        }
        dispatch(getProductosById(id))
    }, [id])

    useEffect(() => {
        setProductInitialState()
    }, [singleProducto])



    const [producto, setProducto] = useState({
        id: "",
        nombre: "",
        precio: "",
        descripcion: "",
        stock: "",
        foto: ""
    })
    
    // trae los valores del producto al formulario para que sean actualizados o eliminados
    const setProductInitialState = () => {
        if (!singleProducto) return;
        setProducto({
            id: singleProducto.id,
            nombre: singleProducto?.nombre,
            precio: singleProducto?.precio.toString(),
            descripcion: singleProducto?.descripcion,
            stock: singleProducto?.stock.toString(),
            foto: singleProducto?.foto
        })
    }
    
    // actualiza el producto
    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let data = {
            id: producto.id,
            nombre: producto.nombre,
            precio: parseInt(producto.precio),
            descripcion: producto.descripcion,
            stock: parseInt(producto.stock),
            foto: producto.foto
        }
        dispatch(updateProductos(data)) // llama a funcion en productoSlice.tsx para actualizar los parametros
        cartelUpdate(producto.nombre) // muestra cartel de producto actualizado
        navigate("/")
    }
    
    // elimina un producto
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, nombre: string) => {
        e.preventDefault()
        if (!id) return;
        if (window.confirm(`¿Está seguro de eliminar el producto ${nombre}?`)) {
            dispatch(deleteProductos(id))
            alert(`Se ha eliminado el producto ${nombre}`);
        } else {
            navigate("/")
        }
        navigate("/")
    }
    
    // se asegura que esten completos todos los campos del formulario
    const noValido = (): boolean => {

        const p = producto
        const noValido = !p.nombre || !p.precio || !p.stock || !p.descripcion || !p.foto
        return noValido
    }

    const cartelUpdate = (nombre: string): void => {

        alert(`Se ha actualizado el producto ${nombre}`)

    }

    return (
        <div className="CreateProductPage">
            <div className="jumbotron">
                <h3>Actualizar | Eliminar</h3>
                <form /* onSubmit={onsubmit} */  >
                    <div className="form-group">
                        <label htmlFor='nombre'>Nombre</label>
                        <input className='form-control' id='nombre' style={{ height: 30 }} type='text' value={producto.nombre} onChange={e => setProducto({ ...producto, nombre: e.target.value })}  ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='precio'>Precio</label>
                        <input className='form-control' id='precio' style={{ height: 30 }} type='number' value={producto.precio} onChange={e => setProducto({ ...producto, precio: e.target.value })} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='descripcion'>Descripcion</label>
                        <input className='form-control' id='descripcion' style={{ height: 30 }} type='text' value={producto.descripcion} onChange={e => setProducto({ ...producto, descripcion: e.target.value })} ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='stock'>Stock</label>
                        <input className='form-control' id='stock' style={{ height: 30 }} type='number' value={producto.stock} onChange={e => setProducto({ ...producto, stock: e.target.value })}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor='foto'>Foto</label>
                        <input className='form-control' id='foto' style={{ height: 30 }} type='text' value={producto.foto} onChange={e => setProducto({ ...producto, foto: e.target.value })}></input>
                    </div>

                    <button disabled={noValido()} className="btn btn-info mt-4 mr-3 fullwidth" onClick={handleUpdate}>Actualizar</button>
                    <button disabled={noValido()} className="btn btn-info mt-3 mr-3 fullwidth" onClick={(e) => handleDelete(e, producto.nombre)}>Eliminar</button>
                </form>
            </div>
        </div>
    )
}
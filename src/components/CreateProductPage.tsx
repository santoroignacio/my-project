

import './CreateProductPage.css'
import { useState } from 'react';
import { useAppDispatch } from '../state/hooks';
import { createProductos } from '../state/productoSlice';



export const CreateProductPage = () => {

    const dispatch = useAppDispatch()

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        stock: "",
        foto: ""
    })

    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let data = {
            nombre: producto.nombre,
            precio: parseInt(producto.precio),
            descripcion: producto.descripcion,
            stock: parseInt(producto.stock),
            foto: producto.foto
        }
        dispatch(createProductos(data)) //llama a agregar producto en productoSlice.tsx
        cartelCreate(producto.nombre)   //llama a funcion que muestra cartel de producto creado en este mismo modulo
        setProducto({
            nombre: "",
            precio: "",
            descripcion: "",
            stock: "",
            foto: ""
        })
    }
    
    //se asegura de que todos los campos del formulario esten completos
    const noValido = (): boolean => {

        const p = producto
        const noValido = !p.nombre || !p.precio || !p.stock || !p.descripcion || !p.foto
        return noValido
    }
    const cartelCreate = (nombre: string): void => {

        alert(`Se ha creado el producto ${nombre}`)

    }



    return (
        <div className="CreateProductPage">
            <div className="jumbotron">
                <h3>Agregar Producto</h3>
                <form onSubmit={onsubmit}  >
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

                    <button disabled={noValido()} className="btn btn-info mt-5 mr-3 fullwidth" >Agregar</button>
                </form>
            </div>
        </div>
    )
}


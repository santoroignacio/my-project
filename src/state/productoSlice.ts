import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Producto } from '../interfaces/interfaces'


interface ProductoState {
  productos: Producto[] | null
  loading: boolean
  singleProducto: Producto | null
  errors: any
}


const initialState: ProductoState = {
  productos: [],
  loading: false,
  singleProducto: null,
  errors: null
}

export const getProductos = createAsyncThunk<Producto[]>(
    "productos/getProductos",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('https://644697040431e885f0168f18.mockapi.io/Productos/')
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )
  
  export const getProductosById = createAsyncThunk<Producto, string>(
    "productos/getProductosById",
    async (id, thunkAPI) => {
      try {
        const response = await axios.get(`https://644697040431e885f0168f18.mockapi.io/Productos/${id}`)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )

  export const createProductos = createAsyncThunk<Producto, Object>(
    "productos/createProductos",
    async (data, thunkAPI) => {
      try {
        const response = await axios.post('https://644697040431e885f0168f18.mockapi.io/Productos/', data)
        thunkAPI.dispatch(getProductos())
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )

  export const updateProductos = createAsyncThunk<Producto, Producto>(
    "productos/updateProductos",
    async (data, thunkAPI) => {
      try {
        const response = await axios.put(`https://644697040431e885f0168f18.mockapi.io/Productos/${data.id}`, data)
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )
  
  export const deleteProductos = createAsyncThunk<string, string>(
    "productos/deleteProductos",
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`https://644697040431e885f0168f18.mockapi.io/Productos/${id}`)
        thunkAPI.dispatch(getProductos())
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )
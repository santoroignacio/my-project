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
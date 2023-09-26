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
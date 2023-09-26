
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './NavBar';
import { RutaNoValida } from './RutaNoValida';
import { useCallback, useEffect } from 'react'
import { getProductos } from './state/productoSlice';
import { useAppDispatch, useAppSelector } from './state/hooks';
import { ProductosPage } from './components/ProductsPage';
import { SingleProductoPage } from './components/SingleProductPage';
import { CreateProductPage } from './components/CreateProductPage';
import { EditProductPage } from './components/EditProductPage';

function App() {

  const dispatch = useAppDispatch()
  const { productos } = useAppSelector(state => state.producto)

  const initApp = useCallback(async () => {
    await dispatch(getProductos())
  }, [dispatch])

  useEffect(() => {
    initApp()
  }, [])

  return (
    <div className="App">
     

        <Navbar />

        <Routes>

          <Route index element={<ProductosPage productoArray={productos} />}></Route>

          <Route path='/:id' element={<SingleProductoPage />}></Route>
          <Route path='/createProductPage' element={<CreateProductPage />}></Route>
          <Route path='/editProductPage/:id' element={<EditProductPage />}></Route>

          <Route path='*' element={<RutaNoValida />}></Route>


        </Routes>
      

    </div>
  );
}

export default App;

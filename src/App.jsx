import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/css/styles.css'

import { Route, Routes } from "react-router-dom"
import NotFound from "./paginas/NotFound"
import { BrowserRouter } from "react-router-dom"
import MenuNavegacion from './componentes/menu/MenuNavegacion';
import Footer from './componentes/footer/Footer';
import Tienda from './paginas/tienda/Tienda';
import SubirProducto from './paginas/subirProducto/SubirProducto';
import Producto from './paginas/producto/Producto';

const App = () => (
  <div className='app'>
    <BrowserRouter >
      <MenuNavegacion />
      <Routes>
        <Route index element={<Tienda />} />
        <Route path="/:id/:productoId" element={<Producto />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/subir-producto" element={<SubirProducto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
)


export default App

import ReactDOM from 'react-dom/client';
import Topbar from './components/Topbar';
import HomePage from './components/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartPage from './components/CartPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
  </Routes>
  </BrowserRouter>
);

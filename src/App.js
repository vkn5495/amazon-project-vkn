import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SearchList from './components/SearchList/SearchList';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import Footer from './components/Footer/Footer';
import ViewPages from './pages/ViewPages';
import CartPages from './pages/CartPages';
import WishListPages from './pages/WishListPages';
import ProductListsPagps from './pages/ProductListsPagps';
import SearchPages from './pages/SearchPages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SearchList />
        <Routes>
          <Route path='/' element={<HomePages />}/>
          <Route path='/view' element={<ViewPages />}/>
          <Route path='/cart' element={<CartPages />}/>
          <Route path='/wish' element={<WishListPages />}/>
          <Route path='/list' element={<ProductListsPagps />}/>
          <Route path='/search' element={<SearchPages />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

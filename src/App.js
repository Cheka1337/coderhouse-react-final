import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from  './components/Cart'
import Checkout from './components/Checkout';
import React from 'react';


function App() {

  // useEffect(()=>{
  //   const colectionProd = collection(db, 'products')
  //   products.map((products)=> addDoc(colectionProd, products))
  // },[])

  return (
    <div className="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={"Bienvenidos!"} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
   
    </BrowserRouter>
       
        
      
    </div>
  );
}

export default App;

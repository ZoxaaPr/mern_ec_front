import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Detail from "./components/Detail/Detail";
import Loader from "./components/Loader/Loader";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import { clearErrors, loadUser } from './actions/userEction';
import store from './store';



function App() {
  const alertt = useAlert();
  const dispatch = useDispatch()
  //const cookies = new Cookies();

  const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
  );



  if (error) {
      alertt.error(error);
      dispatch(clearErrors());
  }
  useEffect(() => {
      store.dispatch(loadUser());


  }, []);

  return (
    <Router>
    <div className="App">
          <Header/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route  path="/products" element={<Products/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/detail/:id" element={<Detail/>}/>
            <Route exact path="/about" element={<Loader/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>  
          <Footer/>
         
    </div>
    </Router>
  );
}

export default App;

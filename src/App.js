import React,{useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/product';
import Categories from './components/Categories';
import AddToCart from './components/addToCart';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App (props){
    const [cartList, setCartList] = useState(false);
    function handleShow(){
        setCartList(!cartList);
    }
    return (
        <>
            <Header show={handleShow}/>
            {
                cartList && <AddToCart/>
            }
            <Categories/>
            <Product/>
            <Footer/>
        </>
    )
} ;
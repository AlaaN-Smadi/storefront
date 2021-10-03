import Header from './components/header';
import Footer from './components/footer';
import Product from './components/product';
import Categories from './components/Categories'
import 'bootstrap/dist/css/bootstrap.min.css';

export default props=> {
    return (
        <>
            <Header/>
            <Categories/>
            <Product/>
            <Footer/>
        </>
    )
} ;
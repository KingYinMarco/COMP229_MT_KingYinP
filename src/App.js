import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/homePage.components';
import ProductForm from './components/newProduct.components';
import ShopForm from './components/newShop.components';
function App() {
  return (
    <Router>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/new-product">New Product</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/new-shop">New Shop</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
          <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/new-product' Component={ProductForm}></Route>
            <Route path='/new-shop' Component={ShopForm}></Route>
          </Routes>
      </Router>
  );
}

export default App;

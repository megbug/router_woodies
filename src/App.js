import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/router_woodies/' element={<HomePage />} />
				<Route path='/router_woodies/about-us' element={<AboutUsPage />} />
				<Route path='/router_woodies/products' element={<ProductsPage />} />
				<Route path='/router_woodies/product/jenson' element={<ProductPage product='jenson' />} />
				<Route path='/router_woodies/product/deon' element={<ProductPage product='deon' />} />
				<Route path='/router_woodies/product/krisha' element={<ProductPage product='krisha' />} />
			</Routes>
		</div>
	);
}

export default App;

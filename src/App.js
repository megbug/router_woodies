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
				<Route path='/' element={<HomePage />} />
				<Route path='/about-us' element={<AboutUsPage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/product/jenson' element={<ProductPage product='jenson' />} />
				<Route path='/product/deon' element={<ProductPage product='deon' />} />
				<Route path='/product/krisha' element={<ProductPage product='krisha' />} />
			</Routes>
		</div>
	);
}

export default App;

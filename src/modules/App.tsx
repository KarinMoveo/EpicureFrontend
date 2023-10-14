import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/components/Header';
import Home from './home/screens/HomeScreen';
import Restaurants from './restaurants/components/Restaurants';
import SpecificRestaurantPage from './restaurants/components/SpecificRestaurantPage';
import SpecificDishPage from './restaurants/components/SpecificDishPage';
import Chefs from './chefs/components/Chefs';
import Footer from '../modules/footer/components/Footer';
import './App.scss';
import OrderHistoryContainer from './orders/components/OrderHistoryContainer';
import MobileCheckout from './checkout/components/Checkout';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://13.53.197.19';
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/restaurants' Component={Restaurants} />
				<Route path='/restaurants/:id' element={<SpecificRestaurantPage />} />
				<Route path='/restaurants/:id/:dishName' element={<SpecificDishPage />} />
				<Route path='/order-history' element={<OrderHistoryContainer />} />
				<Route path='/checkout' element={<MobileCheckout />} />
				<Route path='/chefs' Component={Chefs} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

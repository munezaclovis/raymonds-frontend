import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import App from './App';
import ThemeProvider from './store/theme/context';
import CartProvider from './store/cart/context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './components/Navbar';
const mode = import.meta.env.MODE;

// import { apiCall } from '@bog/bd-utils';

/* onNavigate argument to control microfrontend navigation in container */

function mount({ el, locale, onNavigate, data }) {
	const root = ReactDOM.createRoot(el);

	root.render(<Navbar isLoggedIn={data.isLoggedIn} />);

	return {
		onParentNavigate(nextPathname) {
			// Logic when parent navigates
		},
	};
}

if (mode === 'development') {
	const el = document.getElementById('react-app-root');
	if (el) {
		mount({
			el,
			locale: 'en',
			data: {
				isLoggedIn: true,
			},
		});
	}
}

export { mount };

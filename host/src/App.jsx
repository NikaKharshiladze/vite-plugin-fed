import { useState } from 'react';
import { ReactNavbarMicro } from './micros/ReactNavbarMicro';
import { LoginFormMicro } from './micros/LoginFormMicro';

function App() {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<div className="App">
			<ReactNavbarMicro isLogged={isLogged} />
			<LoginFormMicro onSubmit={() => setIsLogged(true)} />
		</div>
	);
}

export default App;


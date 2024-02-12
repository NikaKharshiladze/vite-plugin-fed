import { BootstrapRoot } from 'loginForm/LoginForm';
import { useEffect } from 'react';

export function LoginFormMicro({ onSubmit }) {
	useEffect(() => {
		document.addEventListener('custom-submit', onSubmit);
	}, [onSubmit]);

	return <bootstrap-root></bootstrap-root>;
}

import { useEffect, useRef } from 'react';
import { mount } from 'reactNavbar/ReactNavbar';

export function ReactNavbarMicro({ isLogged }) {
	const ReactNavbarMicroRef = useRef(null);

	useEffect(() => {
		if (ReactNavbarMicroRef.current) {
			const { onParentNavigate } = mount({
				el: ReactNavbarMicroRef.current,
				locale: 'en',
				data: {
					isLoggedIn: isLogged,
				},
			});
		}
	}, [ReactNavbarMicroRef.current, isLogged]);
	return <div ref={ReactNavbarMicroRef} />;
}

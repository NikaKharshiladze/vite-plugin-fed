import { LitElement, css, html } from 'lit';

export class LoginButton extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
	}

	render() {
		return html` <button type="submit">Login</button> `;
	}

	static get styles() {
		return css`
			button {
				margin-top: auto;
				border-radius: 8px;
				border: 1px solid transparent;
				padding: 0.6em 1.2em;
				font-size: 1em;
				font-weight: 500;
				font-family: inherit;
				background-color: #1a1a1a;
				cursor: pointer;
				transition: border-color 0.25s;
			}
			button:hover {
				border-color: #646cff;
			}
			button:focus,
			button:focus-visible {
				outline: 4px auto -webkit-focus-ring-color;
			}

			@media (prefers-color-scheme: light) {
				a:hover {
					color: #747bff;
				}
				button {
					background-color: #f9f9f9;
				}
			}
		`;
	}
}

window.customElements.define('login-button', LoginButton);

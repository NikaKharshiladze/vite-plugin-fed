import { LitElement, css, html } from 'lit';
import { LoginInput } from './components/login_input';
import { LoginButton } from './components/login_button';

export class BootstrapRoot extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
	}

	_submit() {
		let event = new CustomEvent('custom-submit', {
			detail: {
				message: { isLoggedIn: true },
			},
			bubbles: true,
		});
		this.dispatchEvent(event);
	}

	render() {
		return html`
			<div class="card">
				<login-input></login-input>
				<login-button @click=${this._submit}></login-button>
			</div>
		`;
	}

	static get styles() {
		return css`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
			.card {
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				margin: auto;
			}
		`;
	}
}

window.customElements.define('bootstrap-root', BootstrapRoot);


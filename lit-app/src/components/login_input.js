import { LitElement, css, html } from 'lit';

export class LoginInput extends LitElement {
	static get properties() {
		return {};
	}

	constructor() {
		super();
	}

	render() {
		return html`<div class="form__group field">
			<input type="input" class="form__field" placeholder="Name" name="name" id="name" required />
			<label for="name" class="form__label">Username</label>
		</div>`;
	}

	static get styles() {
		return css`
			.form__group {
				position: relative;
				padding: 15px 0 0;
				margin-top: 10px;
				width: 50%;
			}

			.form__field {
				font-family: inherit;
				width: 100%;
				border: 0;
				border-bottom: 2px solid #9b9b9b;
				outline: 0;
				font-size: 1.3rem;
				color: '#9b9b9b';
				padding: 7px 0;
				background: transparent;
				transition: border-color 0.2s;

				&::placeholder {
					color: transparent;
				}

				&:placeholder-shown ~ .form__label {
					font-size: 1.3rem;
					cursor: text;
					top: 20px;
				}
			}

			.form__label {
				position: absolute;
				top: 0;
				display: block;
				transition: 0.2s;
				font-size: 1rem;
				color: #9b9b9b;
			}

			.form__field:focus {
				~ .form__label {
					position: absolute;
					top: 0;
					display: block;
					transition: 0.2s;
					font-size: 1rem;
					color: #11998e;
					font-weight: 700;
				}
				padding-bottom: 6px;
				font-weight: 700;
				border-width: 3px;
				border-image: linear-gradient(to right, #11998e, #38ef7d);
				border-image-slice: 1;
			}
			/* reset input */
			.form__field {
				&:required,
				&:invalid {
					box-shadow: none;
				}
			}
			/* demo */
			body {
				font-family: 'Poppins', sans-serif;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				min-height: 100vh;
				font-size: 1.5rem;
				background-color: #222222;
			}
		`;
	}
}

window.customElements.define('login-input', LoginInput);

import { html, LitElement } from 'lit';

export default class AppShell extends LitElement {
    static get is() { return 'app-shell'; }

    createRenderRoot() { return this; }
    render() {  return html`asd`;  }
}

customElements.define(AppShell.is, AppShell);

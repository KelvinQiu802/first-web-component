const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    position: relative;
    top: 100px;
    left: 100px;
  }
  :host .button {
    height: 20px;
    display: inline-block;
    user-select: none;
    cursor: pointer;
    padding: 3px 5px;
    margin: 10px;
  }
  :host([shape='round']) .button {
    border-radius: 5px;
  }
  :host([color='primary']) .button {
    background-color: blue;
    color: white;
  }
  :host([color='warning']) .button {
    background-color: orange;
    color: white;
  }
</style>
<div class='button'>
  <slot></slot>
</div>
`;

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    console.log(this.loading);
  }

  disconnectedCallback() {}
}

customElements.define('my-button', MyButton);

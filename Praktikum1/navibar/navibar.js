class CustomNavigationBar extends HTMLElement {
  constructor() {
      super()
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.innerHTML = `
        <style>   
          div.navibar {
            align-items: center;
            background-color: #ccc;
            margin: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-grow: 1;
          }
          ::slotted(a) {
            display: block;
            text-align: center;
            flex-grow: 1;
            margin: 5px;
            padding: 10px;
            box-sizing: border-box;
         }
        </style>
        <div class="navibar">
          <slot></slot>
        </div>`
  }

}

customElements.define('navigation-bar', CustomNavigationBar)
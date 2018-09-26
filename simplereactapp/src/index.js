import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

class SimpleReactApp extends HTMLElement {
    constructor() {
        super();
        
        console.log('ReactApp constructor', this);
    }
    connectedCallback() {
        console.log('ReactApp connected');
        this.render();
    }
    render() {
        render(<App/>, this);
    }

    disconnectedCallback() {
        console.log('ReactApp disconnected',);
    }
}

window.customElements.define('simple-react', SimpleReactApp);

// import React from 'react'
// import { render } from 'react-dom';
// import App from './components/app';

// class SimpleReactApp extends HTMLElement {
//     static get observedAttributes() {
//         return ['error-mode', 'title'];
//     }

//     getTitle() {
//         return this.getAttribute('title');
//     }

//     get errorMode() {
//         return this.hasAttribute('error-mode');
//     }

//     set errorMode(val) {
//         if (val) {
//             this.setAttribute('error-mode', '');
//         } else {
//             this.removeAttribute('error-mode');
//         }
//     }

//     produceError(e) {
//         this.dispatchEvent(new CustomEvent('error', {detail: e}));
//     }

//     constructor() {
//         super();

//         console.log('ReactApp constructor', this);
//     }

//     connectedCallback() {
//         try {
//             if (this.errorMode) {
//                 throw new Error('Application failed at load');
//             }
//         } catch (e) {
//             this.produceError(e);
//             return;
//         }

//         console.log('ReactApp connected');

//         this.render();
//     }

//     render() {
//         render(<App/>, this);
//     }

//     disconnectedCallback() {
//         console.log('ReactApp disconnected',);
//     }

//     attributeChangedCallback(attrName, oldVal, newVal) {
//         console.log('ReactApp attributeChanged', attrName, oldVal, newVal);

//         switch (attrName) {
//             case 'title':
//                 this.render();
//         }
//     }
// }

// window.customElements.define('simple-react', SimpleReactApp);

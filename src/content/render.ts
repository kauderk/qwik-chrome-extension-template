import { render, jsx } from '@builder.io/qwik'
import App from './Content'

console.info('chrome extension template-qwik-ts content script')

const div = document.createElement('div')
div.style.setProperty('z-index', '100000')
div.style.setProperty('position', 'fixed')
document.body.insertAdjacentElement('afterbegin', div)

// const shadowRoot = div.attachShadow({ mode: 'open' })
// const divShadow = shadowRoot.appendChild(document.createElement('div'))

render(div, jsx(App, {}))

import '../shared/render'

export default {}

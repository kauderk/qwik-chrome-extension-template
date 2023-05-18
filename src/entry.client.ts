import { render, jsx } from '@builder.io/qwik'
import Root from './root'
import './qwikloader'

render(document.body, jsx(Root, {}))

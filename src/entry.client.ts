import { render, jsx } from '@builder.io/qwik'
import Root from './root'
import { QWIK_LOADER } from '@builder.io/qwik/loader'
eval(QWIK_LOADER) // https://github.com/BuilderIO/qwik/discussions/787#:~:text=io/qwik%22%3B-,eval(QWIK_LOADER),-export%20const%20decorators

render(document.body, jsx(Root, {}))

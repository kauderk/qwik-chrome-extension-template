import {
  renderToString,
  type RenderToStringOptions,
  QwikLoader,
} from '@builder.io/qwik/server'
import { App } from './App'

export function render(opts: RenderToStringOptions) {
  return renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Mini Qwik Loader</title>
      </head>
      <body>
        <App />
        <QwikLoader debug={opts.debug} />
      </body>
    </html>,
    { ...opts }
  )
}

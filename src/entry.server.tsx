import {
  renderToString,
  type RenderToStringOptions,
  QwikLoader,
} from '@builder.io/qwik/server'
import { Main } from './main'

export function render(opts: RenderToStringOptions) {
  return renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Mini Qwik Loader</title>
      </head>
      <body>
        <Main />
        <QwikLoader debug={opts.debug} />
      </body>
    </html>,
    { ...opts }
  )
}

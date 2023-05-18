import type { RenderToStreamOptions } from '@builder.io/qwik/server'
import { renderToStream } from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import Options from './options/Options'

export default function (opts: RenderToStreamOptions) {
  return renderToStream(
    <body>
      <head>
        <title>Mini Qwik - Loader</title>
      </head>
      <body>
        <Options />
      </body>
    </body>,
    {
      manifest,
      ...opts,
      // Use container attributes to set attributes on the html tag.
      containerAttributes: {
        lang: 'en-us',
        ...opts.containerAttributes,
      },
    }
  )
}

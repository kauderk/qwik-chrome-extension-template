import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(`
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
				'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background: gray;
}

h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 200;
		line-height: 1.2rem;
		margin: 2rem auto;
}

h6 {
		font-size: 0.5rem;
		color: #333333;
		margin: 0.5rem;
}

a {
		font-size: 0.5rem;
		margin: 0.5rem;
		color: #cccccc;
		text-decoration: none;
}

@media (min-width: 480px) {
		h3 {
				max-width: none;
		}
}
	`)
  const crx = 'create-chrome-ext'

  return (
    <main>
      <h3>Content Page!</h3>

      <h6>v 0.0.0</h6>

      <button onClick$={() => alert('Hello from content script!')}>
        Alert
      </button>
      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
        Power by {crx}
      </a>
    </main>
  )
})

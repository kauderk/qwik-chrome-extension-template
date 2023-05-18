import { component$ } from '@builder.io/qwik'

export const App = component$(() => {
  console.log('Mini Qwik - App')
  return (
    <>
      <p>Mini Qwik - Loader</p>
      <button onClick$={() => alert('mini-qwik')}>Click</button>
    </>
  )
})

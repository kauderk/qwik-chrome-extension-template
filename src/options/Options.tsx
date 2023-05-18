import { component$ } from '@builder.io/qwik'

export default component$(() => {
  console.log('mini-qwik-loader app')
  return (
    <>
      <p>Mini Qwik - Loader</p>
      <button onClick$={() => alert('mini-qwik')}>Click</button>
    </>
  )
})

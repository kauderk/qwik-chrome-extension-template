import { component$ } from '@builder.io/qwik'

export const App = component$(() => {
  console.log('App')
  return (
    <>
      Mini Qwik - <button onClick$={() => console.log('Hello')}>Click</button>
    </>
  )
})

import { component$ } from '@builder.io/qwik'

export const Main = component$(() => {
  console.log('Main')
  return (
    <>
      Mini Qwik - <button onClick$={() => console.log('Hello')}>Click</button>
    </>
  )
})

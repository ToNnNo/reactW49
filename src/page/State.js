import Counter from "../component/Counter";

export default function State() {

  return (
    <>
      <h2>L'état local des composants</h2>

      <Counter />

      <Counter step="2" />

      <Counter step="10" />
    </>
  )

}

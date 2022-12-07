import CounterReducer from "../component/CounterReducer";
import FakeListUser from "../component/FakeListUser";

export default function Hook() {

  return (
    <>
      <h2>Les Hooks</h2>

      <FakeListUser />

      <CounterReducer />
    </>
  )

}

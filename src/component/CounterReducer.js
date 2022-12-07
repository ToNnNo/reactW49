import { useReducer } from "react";

/**
 * state = { count }
 * action = { type, step }
 */
/*function reducer(state, action) {
  const step = action.step || 1;
  switch(action.type) {
    case 'increase':
      return { count: state.count + step };
    case 'decrease':
      return { count: state.count - step };
    default:
      break;
  }
}*/

function reducer({ count }, { type, step = 1}) {

  switch(type) {
    case 'increase':
      return { count: count + step };
    case 'decrease':
      return { count: count - step };
    default:
      break;
  }
}

export default function CounterReducer() {

  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  // state.count
  const [{ count }, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>Compteur <small>Hook Reducer</small></h2>

      <button onClick={ () => { dispatch({ type: 'decrease' }) } }>Diminuer</button>
      <span style={{ padding: '5px' }}>{ count }</span>
      <button onClick={ () => { dispatch({ type: 'increase', step: 2 }) } }>Augmenter</button>
    </>
  );

}

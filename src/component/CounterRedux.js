import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../slice/counterSlice";

export default function CounterRedux() {
  // useSelector permet de demander un "state" se trouvant dans le store
  const counter = useSelector( (state) => state.counter );
  // useDispatch permet de déclencher les actions du reducer du store (fusion de l'ensemble des reducers fournis au store)
  const dispatch = useDispatch(); 

  const [step, setStep] = useState(1);

  function dataChange(e) {
    const value = e.target.value <= 0 ? 1 : e.target.value;
    setStep( value );
  }

  return (
    <>
      <h3>Compteur Redux</h3>

      <p>Compteur <small>Counter Redux</small>: { counter.value }</p>

      <button onClick={ () => { dispatch(decrease({ step })) } }>Diminuer de { step }</button>
      <button onClick={ () => { dispatch(increase({ step })) } }>Augmenter de { step }</button>

      <button onClick={ () => { dispatch(reset()) } }>Reinitialiser</button>

      <div style={{marginTop: '10px'}}>
        <label htmlFor="step">Change le pas du compteur : </label>
        <input type="number" name="step" id="step" min="1" value={step} onChange={ dataChange } />
      </div>
    </>
  )

}
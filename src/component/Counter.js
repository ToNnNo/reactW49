import React from 'react';

export default class Counter extends React.Component {

  // utiliser les props pour définir le pas (step) du compteur
  // si le pas (step) n'existe pas, la valeur par defaut est 1

  static defaultProps = { step: 1 };

  constructor() {
    super();

    this.state = { value: 0 }
  }

  decrease() {
    this.setState({ value: this.state.value - parseInt(this.props.step) })
  }

  increase() {
    // this.state.value += 1; // impossible; state non mutable

    this.setState({ value: this.state.value + parseInt(this.props.step) })
  }

  render() {
    return (
      <>
        <h3>Counter <small>(Step: { this.props.step })</small></h3>

        <button onClick={() => { this.decrease() } }>Diminuer</button>
        <span style={{padding: '10px'}}>{ this.state.value }</span>
        <button onClick={() => { this.increase() } }>Augmenter</button>
      </>
    )
  }

}

import React from "react";

export default class Clock extends React.Component {

  constructor() {
    super();
    console.log('Constructor');
    this.state = { date: new Date() }
  }

  componentDidMount() {
    console.log("Mount");

    this.id = setInterval( () => {
      console.log(new Date());
      this.setState({ date: new Date() });
    }, 1000 );
  }

  render() {
    console.log('Render');
    return <p>{ this.state.date.toLocaleTimeString() }</p>
  }

  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(this.id);
  }

}

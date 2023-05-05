import { Component } from "react";

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 27,
      text: "+++",
    };
  }

  nextYear = () => {
    this.setState((state) => ({ year: state.year + 1 }));
  };

  render() {
    const { name } = this.props;

    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}</h1>
        <h2>Age {this.state.year}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quo quia quasi itaque mollitia dolorem ducimus dolores commodi est
          fugiat.
        </p>
      </div>
    );
  }
}

export default Playground;

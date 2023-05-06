import { Component } from "react";

class Playground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 27,
      position: "",
    };
  }

  //
  // Используем тут стрелочную функцию, посколько при обычной функции контекст вызова потеряется.
  // Если же хочется использовать обычную функцию, тогда в контукторе класса нужно прописать следующее:
  // this.nextYear = this.nextYear.bind(this);
  //

  nextYear = () => {
    this.setState((state) => ({ year: state.year + 1 }));
  };

  changePosition = (e) => {
    this.setState({ position: e.target.value });
  };

  render() {
    const { name } = this.props;
    const { position, year } = this.state;

    return (
      <div>
        <button onClick={this.nextYear}>Increase</button>
        <h1>My name is {name}</h1>
        <h2>Age {year}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quo quia quasi itaque mollitia dolorem ducimus dolores commodi est
          fugiat.
        </p>
        <div>
          <h3>Должность: {position}</h3>
          <input
            type="text"
            onChange={this.changePosition}
            placeholder="Введите должность"
          />
        </div>
      </div>
    );
  }
}

export default Playground;

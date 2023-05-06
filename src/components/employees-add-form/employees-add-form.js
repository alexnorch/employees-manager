import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAddItem(this.state);
    this.setState({ name: "", salary: "" });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit} className="add-form d-flex">
          <input
            name="name"
            onChange={this.onValueChange}
            value={this.state.name}
            placeholder="Как его зовут?"
            type="text"
            className="form-control new-post-label"
          />
          <input
            name="salary"
            value={this.state.salary}
            onChange={this.onValueChange}
            placeholder="З/П в $?"
            type="number"
            className="form-control new-post-label"
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;

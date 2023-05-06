import { Component } from "react";

import "./app.css";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

// Component for testing new react features
// import Playground from "../playground";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Alex C.",
          salary: 1550,
          increased: false,
          rise: false,
          id: 1,
        },
        {
          name: "John D.",
          salary: 3200,
          increased: false,
          rise: false,
          id: 2,
        },
        {
          name: "Robert T.",
          salary: 1300,
          increased: false,
          rise: false,
          id: 4,
        },
      ],
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = ({ name, salary }) => {
    const newItem = {
      name,
      salary,
      id: (this.maxId += 1),
      increased: false,
      liked: false,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    const incEmployees = this.state.data.filter(
      (item) => item.increased
    ).length;
    const employeesLength = this.state.data.length;

    return (
      <div className="app">
        <AppInfo
          incEmployees={incEmployees}
          employeesLength={employeesLength}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem}
          data={this.state.data}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
        {/* <Playground /> */}
      </div>
    );
  }
}

export default App;

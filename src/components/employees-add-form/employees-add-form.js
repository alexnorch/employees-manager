import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          placeholder="Как его зовут?"
          type="text"
          className="form-control new-post-label"
        />
        <input
          placeholder="З/П в $?"
          type="number"
          className="form-control new-post-label"
        />
        <button className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;

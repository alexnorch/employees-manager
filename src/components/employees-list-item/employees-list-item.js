import "./employees-list-item.css";

const EmployeesListItem = ({
  rise,
  increased,
  name,
  salary,
  onDelete,
  onToggleProp,
}) => {
  let classNames = "list-group-item d-flex justify-content-between";

  if (increased) classNames += " increase";
  if (rise) classNames += " like";

  return (
    <li className={classNames}>
      <span
        data-toggle="rise"
        onClick={onToggleProp}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          data-toggle="increased"
          onClick={onToggleProp}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

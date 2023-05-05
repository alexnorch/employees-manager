import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        // После деструктруризации оставшиеся свойства группируем в новый обьект itemsProps, только уже без свойства ID
        // Работает алгоритм согласования, который сравнивает старые и новые копии DOM дерева на основе свойства KEY
        return <EmployeesListItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;

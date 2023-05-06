import "./app-info.css";

const AppInfo = ({ incEmployees, employeesLength }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Norch Ltd</h1>
      <h2>Общее число сотрудников: {employeesLength}</h2>
      <h2>Премию получат: {incEmployees}</h2>
    </div>
  );
};

export default AppInfo;

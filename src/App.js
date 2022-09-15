import "./styles.css";
import { useState } from "react";
import { Data } from "./Data";
function App() {
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(Data);
  const [tableFilter, setTableFilter] = useState("");
  const searchData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"></span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Here..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={value}
          onChange={searchData}
        />
      </div>
      <div className=" container mt-5">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">firstName</th>
              <th scope="col">Lastname</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((subData) => {
                  return (
                    <tr>
                      <td>{subData.id}</td>
                      <td>{subData.first_name}</td>
                      <td>{subData.last_name}</td>
                      <td>{subData.email}</td>
                      <td>{subData.gender}</td>
                    </tr>
                  );
                })
              : dataSource.map((subData) => {
                  return (
                    <tr>
                      <td>{subData.id}</td>
                      <td>{subData.first_name}</td>
                      <td>{subData.last_name}</td>
                      <td>{subData.email}</td>
                      <td>{subData.gender}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;

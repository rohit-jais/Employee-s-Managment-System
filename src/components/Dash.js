import React from "react";

const Decide = props => {
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.class}</th>
      <th>{props.section}</th>
      <th>{props.subject}</th>
      <th>
        <button
          className="btn btn-success"
          onClick={() => props.edit(props.id)}
        >
          Edit
        </button>
      </th>
      <th>
        <button
          className="btn btn-success"
          onClick={() => props.delete(props.id)}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

const Dash = props => {
  return (
    <div className="container text-center">
                  <select onClick={props.filterSection} className="btn btn-success m-2">
                <option value="all">Filter Area</option>
                <option value="all">All</option>
                <option value="Factory">Factory </option>
                <option value="Managment">Managment</option>
                <option value="Warehouse">Warehouse</option>
            </select>
      <select onClick={props.filterSubject} className="btn btn-success m-2">
        <option value="colc">Flter JOB</option>
        <option value="Engieneer">Engieneer</option>
                <option value="Sales">Sales Man</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Security">Security</option>
                <option value="HR">HR</option>
                <option value="Misc">Misc</option>
      </select>
      <div className="col">
        <table className="table border mt-4">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Area</th>
              <th>Job Assigned</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(element => (
              <Decide
                key={element.id}
                id={element.id}
                name={element.name}
                class={element.class}
                section={element.section}
                subject={element.subject}
                edit={props.handleEdit}
                delete={props.handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dash;

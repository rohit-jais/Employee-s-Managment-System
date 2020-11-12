import React from "react";
import Dash from "./Dash";
import uuid from "react-uuid";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      class: "",
      section: "",
      subject: "",
      dataFaculty: [],
      dataEdt: [],
      misc: false,
      misc2: false,
      id: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let blockEntry = {
      name: this.state.name,
      class: this.state.class,
      section: this.state.section,
      subject: this.state.subject,
      id: uuid()
    };
    this.setState({
      dataFaculty: [...this.state.dataFaculty, blockEntry],
      dataEdt: [...this.state.dataEdt, blockEntry],
      misc: true
    });
    let localData = [...this.state.dataFaculty, blockEntry];
    localStorage.setItem("data", JSON.stringify(localData));

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      class: "",
      section: "",
      subject: ""
    });
  };
  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.setState({
        dataFaculty: JSON.parse(localStorage.getItem("data")),
        dataEdt: JSON.parse(localStorage.getItem("data")),
        misc: true
      });
    }
  }

  changeFac = id => {
    let user = this.state.dataEdt.find(element => element.id === id);
    this.setState({
      name: user.name,
      class: user.class,
      section: user.section,
      subject: user.subject,
      id: user.id,
      misc2: true
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    let blockEntry = {
      name: this.state.name,
      class: this.state.class,
      section: this.state.section,
      subject: this.state.subject,
      id: this.state.id
    };
    const { dataEdt, id } = this.state;
    const newUserData = dataEdt.map(element => {
      if (element.id === id) {
        return blockEntry;
      }
      return element;
    });
    this.setState({
      dataFaculty: newUserData,
      dataEdt: newUserData,
      misc2: false
    });
    localStorage.setItem("data", JSON.stringify(newUserData));
    this.reset();
  };

  removeFac = id => {
    let userData = this.state.dataFaculty.filter(
      element => element.id !== id
    );
    this.setState({
      dataEdt: [...userData]
    });
    localStorage.setItem("data", JSON.stringify(userData));
  };

  sectionsSort = e => {
    e.target.value === "colc"
      ? this.setState({ dataEdt: this.state.dataFaculty })
      : this.setState({
          dataEdt: this.state.dataFaculty.filter(
            element => element.section === e.target.value
          )
        });
  };

  subjectSort = e => {
    e.target.value === "colc"
      ? this.setState({ dataEdt: this.state.dataFaculty })
      : this.setState({
          dataEdt: this.state.dataFaculty.filter(
            element => element.subject === e.target.value
          )
        });
  };

  render() {
    let enterFunction = this.state.misc2
      ? this.handleUpdate
      : this.handleSubmit;

    return (
      <div className="container-fluid">
        <h1 className="text-center text-success display-3 mb-5 font-weight-bold">
          {" "}
          Welcome to Employee Managment System
        </h1>
        <div className="col text-center justify-content-center">
          <form onSubmit={enterFunction}>
            <div className="form-group">
              <label className="h5">NewBee Here</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Employee's Name"
              />
            </div>
            <div className="form-group">
              <label className="h5">Department</label>
              <select
                name="class"
                value={this.state.class}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="--">Choose Dept.</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Supply Chain">Supply Chain</option>
                <option value="Warehouse & Security">Warehouse & Security</option>
              </select>
            </div>
            <div className="form-group">
              <label className="h5"> Area Assigned</label>
              <select
                name="section"
                value={this.state.section}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="--">Choose Area</option>
                <option value="Factory">Factory</option>
                <option value="Managment">Managment</option>
                <option value="Warehouse">Warehouse</option>
              </select>
            </div>
            <div className="form-group">
              <label className="h5">Job Assigned</label>
              <select
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="">Job</option>
                <option value="Engieneer">Engieneer</option>
                <option value="Sales">Sales Man</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Security">Security</option>
                <option value="HR">HR</option>
                <option value="Misc">Misc</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-3 mb-5">Enter to Update</button>
            </div>
          </form>
        </div>
        {this.state.misc && (
          <Dash
            data={this.state.dataEdt}
            handleEdit={this.changeFac}
            handleDelete={this.removeFac}
            filterSection={this.sectionsSort}
            filterSubject={this.subjectSort}
          />
        )}
      </div>
    );
  }
}
export default Block;

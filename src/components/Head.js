import React from "react";
import { Link } from "react-router-dom";

class Head extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-3 text-center text-danger">
              <b>Employee Managment System</b>
            </h1>

     
          </div>
        </div>
        <div class=" text-center text-success m-5 p-5">
          <Link to="/signin">
            <b>Signin Here</b>
          </Link>
          <br />

          <Link to="/login">
            <b>Login Here</b>
          </Link>
        </div>
      </div>
    );
  }
}
export default Head;

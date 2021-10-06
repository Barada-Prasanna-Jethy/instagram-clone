import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { message } from "antd";
import { addUser } from "../actions/action";
import { connect } from "react-redux";
import "../styles/login.css";

function mapStateToProps(state) {
  return { users: state.user };
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }
  onLogin = (name, password) => {
    var isLoginValid = false;
    this.props.users.map((user) => {
      if (user.name === name && user.password === password) {
        isLoginValid = true;
      }
    });
    if (isLoginValid) {
      message.success("Successfully logged in");
      this.props.history.push("/home");
    } else {
      message.error("Invalid login details");
    }
  };

  render() {
    const { addUser, users } = this.props;
    const { name, password } = this.state;
    return (
      <div className="login-container">
        <img
          className="login-container-left-section"
          src="https://via.placeholder.com/600/92c952"
        ></img>
        <div className="login-container-right-section">
          <h1>Instagram</h1>
          <input
            className="login-input"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            value={name}
            placeholder="Phone or Urer Name"
          ></input>
          <input
            className="login-input"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            value={password}
            placeholder="Password"
          ></input>
          <button
            className="login-button"
            onClick={() => {
              addUser(name, password);
              message.success("Successfully Signed in");

              this.setState({ name: "", password: "" });
            }}
          >
            sign up
          </button>
          <button
            className="login-button"
            onClick={() => {
              this.onLogin(name, password);
              this.setState({ name: "", password: "" });
            }}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addUser,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

import React from "react";
import "./Login.css";
import slackLogo from "../../Assets/Images/5cb480cd5f1b6d3fbadece79.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { actionTypes } from "../../ContextAPI/Reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} alt="" />
        <h1>Sign in to Yazan Widyan HQ</h1>
        <p>yazanwidyan.slack.com</p>
        <Button onClick={logIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;

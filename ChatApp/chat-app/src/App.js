import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import ChatApp from "./components/ChatApp";
import { connect } from "react-redux";
import { auth } from "./firebase";

const App = (props) => {
  const userLogedIn = props.value;
  const { login, logout } = props;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        });
      } else {
        logout();
      }
    });
  });

  return <div>{userLogedIn ? <ChatApp /> : <Login />}</div>;
};

const mapStateToProps = (state) => {
  return {
    value: state.userReducer.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch({
        type: "LOGIN",
        payload: user,
      });
    },
    logout: () => {
      dispatch({
        type: "LOGOUT",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

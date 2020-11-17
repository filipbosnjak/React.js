import React, { useEffect } from "react";
import Imessage from "./Imessage";
import Login from "./Login";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //User logged out
        dispatch(logout());
      }
    });
  }, []);
  console.log(user);

  return <div>{user.value ? <Imessage /> : <Login />}</div>;
}

export default App;

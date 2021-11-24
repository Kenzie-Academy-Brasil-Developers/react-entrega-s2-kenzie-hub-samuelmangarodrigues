import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../login";
import Register from "../register";
import UserPage from "../userpage";
const Routes = () => {
  const [autheticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("@Kenzin:token") || "";
    if (token) {
      return setAuthenticated(true);
    }
  }, [autheticated]);
  return (
    <Switch>
      <Route exact path="/">
        <Login
          autheticated={autheticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/register">
        <Register autheticated={autheticated} />
      </Route>
      <Route path="/userpage">
        <UserPage
          autheticated={autheticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
export default Routes;

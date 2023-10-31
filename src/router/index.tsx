import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Login from "../pages/Login";
import SignUpFrom from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoute";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" Component={PrivateRoutes}>
                    <Route path="/" Component={Home} />
                    <Route path="/dashboard" Component={Dashboard} />
                </Route>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={SignUpFrom} />
            </Switch>
        </Router>
    );
};

export default Routes;

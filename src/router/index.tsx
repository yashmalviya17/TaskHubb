import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Login from "../pages/Login";
import SignUpFrom from "../pages/Register";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={SignUpFrom} />
            </Switch>
        </Router>
    );
};

export default Routes;

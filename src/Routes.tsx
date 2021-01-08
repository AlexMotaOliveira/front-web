import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Order from "./Order";

function Routes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Order />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DataTable from './DataTable';

class Rou extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin">
                        <DataTable />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Rou;
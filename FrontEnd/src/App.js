import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import home from './components/home';

import addEmployee from './components/Employee/addEmployee';
import viewEmployee from './components/Employee/viewEmployee';
import editEmployee from './components/Employee/editEmployee';

import addDepartment  from './components/Department/addDepartment';
import viewDepartment  from './components/Department/viewDepartment';
import editDepartment  from './components/Department/editDepartment';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={home}/>

                        <Route exact path='/addEmployee' component={addEmployee}/>
                        <Route  path='/viewEmployee' component={viewEmployee}/>
                        <Route  path='/editEmployee/:id' component={editEmployee}/>

                        <Route exact path='/addDepartment' component={addDepartment}/>
                        <Route  path='/viewDepartment' component={viewDepartment}/>
                        <Route  path='/editDepartment/:id' component={editDepartment}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;
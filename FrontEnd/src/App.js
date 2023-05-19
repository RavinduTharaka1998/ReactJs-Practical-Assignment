import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import addEmployee from './components/addEmployee';
import viewEmployee from './components/viewEmployee';
import editEmployee from './components/editEmployee';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={addEmployee}/>
                        <Route  path='/viewEmployee' component={viewEmployee}/>
                        <Route  path='/editEmployee/:id' component={editEmployee}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;
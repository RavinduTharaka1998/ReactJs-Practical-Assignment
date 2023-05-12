import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';






class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        //<Route exact path='/' component={Landing}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;
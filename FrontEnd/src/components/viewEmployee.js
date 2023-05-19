import  React, {Component} from 'react';
import axios from 'axios';

import EmployeeTableRow from './employeeTableRow';
import './css/style.css'

export default  class viewEmployee extends  Component{


    constructor(props){
        super(props);

        this.state = {employees : []};

    }

    componentDidMount() {
        //alert("Calling")
        axios.get('https://localhost:7149/api/Employee')
            .then(response => {
                this.setState({employees : response.data});
                //console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.employees.map(function (object, i){
            return <EmployeeTableRow obj = {object} key = {i}/>;
        });
    }


    render() {
        return(
            <div className='container'>
                    <br/>
                    <div className='view-top'>
                        <img src = "https://probill.com/wp-content/uploads/corporate-portrait-office-workers-employees_74855-5471.jpeg" width = "200"/>
                        <h2>Current Employees Details</h2>
                    </div>
                    
                    <br/>
                    <a href = "/" className='btn btn-dark'>+ Add New One</a>
                    <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>email</th>
                                    <th>DoB</th>
                                    <th>Age</th>
                                    <th>salary</th>
                                    <th>Department</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                    </table>
                
            </div>
        )
    }
}
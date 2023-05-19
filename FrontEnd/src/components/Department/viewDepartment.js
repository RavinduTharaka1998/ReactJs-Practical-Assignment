import  React, {Component} from 'react';
import axios from 'axios';

import DepartmentTableRow from './departmentTableRow';
import '../css/style.css';

export default  class viewDepartment extends  Component{


    constructor(props){
        super(props);

        this.state = {department : []};

    }

    componentDidMount() {
        //alert("Calling")
        axios.get('https://localhost:7149/api/Department')
            .then(response => {
                this.setState({department : response.data});
                //console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.department.map(function (object, i){
            return <DepartmentTableRow obj = {object} key = {i}/>;
        });
    }


    render() {
        return(
            <div className='container'>
                    <br/>
                    <div className='view-top'>
                        <img src = "https://img.freepik.com/free-vector/principals-office-school-with-desk-chairs-bookcase-showcase-with-sport-trophies-cartoon-empty-interior-headmaster-cabinet-meeting-talking-with-teachers-pupils-parents_107791-3108.jpg" width = "200"/>
                        <h2>Current Departments Details</h2>
                    </div>
                    
                    <br/>
                    <a href = "/" className='btn btn-primary'>Home</a> &nbsp;
                    <a href = "/addDepartment" className='btn btn-dark'>+ Add New One</a>
                    <table className="table table-striped" style = {{marginTop :20}}>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Department Name</th>
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
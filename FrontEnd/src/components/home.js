import  React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import './css/style.css'

export default  class home extends  Component{


    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='container'>
                <hr/>
                <h1>Company Management System</h1>
                <hr/>
                <div className='row home-row'>
                    <div className='col-lg-6'>
                       <img src = "https://img.freepik.com/free-vector/office-concept-illustration_114360-795.jpg"/><br/>
                       <a href ="/addEmployee" className='btn btn-success'>Employee</a>
                    </div>
                    <div className='col-lg-6'>
                        <img src = "https://cbsgroups.co.uk/content/dam/cbs/member/illustrations/brand/illustration.jpg"/><br/>
                        <a href ="/addDepartment" className='btn btn-dark'>Department</a>
                    </div>
                </div>
                <hr/>
                <p>@copyRight hackers</p>
            </div>
        )
    }
}
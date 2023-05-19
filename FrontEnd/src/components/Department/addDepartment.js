import  React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import '../css/style.css';

export default  class addDepartment extends  Component{


    constructor(props){
        super(props);

        this.onChangetDepartmentName = this.onChangetDepartmentName.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            departmentName: ''
        }

    }

    onChangetDepartmentName(e){
        this.setState( {
            departmentName: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            departmentName : this.state.departmentName
        };

        axios.post('https://localhost:7149/api/Department',obj)
        .then(res => {
            alert("Department Added Successfully");
            this.setState({
                departmentName: ''
    
            })
            window.location.replace('/viewDepartment');
        })
        .catch((error) =>{
            console.log(error);
            window.location.replace('/addDepartment');
        })
       
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h2 className= 'tittle'>Department Management</h2>
                        <hr/>
                        <h3 className="text-center">Add New Department</h3>
                        <hr/>
                        <a href = "/" className='btn btn-dark'>Home</a> &nbsp;
                        <a href = "/viewDepartment" className='btn btn-success'>View Department</a>
                        <hr/>
                        <img src = "https://cbsgroups.co.uk/content/dam/cbs/member/illustrations/brand/illustration.jpg" width={300} />
                        <hr/>
                    </div>
                    <div className='col-lg-8'>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label>Department Name :</label>
                                <input type="text" required class="form-control" value={this.state.departmentName} onChange = {this.onChangetDepartmentName}/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Add Department</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
import  React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import './css/style.css'

export default  class editEmployee extends  Component{


    constructor(props){
        super(props);

        this.onChangetFirstName = this.onChangetFirstName.bind(this);
        this.onChangetLastName = this.onChangetLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangetDoB = this.onChangetDoB.bind(this);
        this.onChangetAge = this.onChangetAge.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            dob:'',
            age: '',
            salary:'',
            department:''
        }

    }

    componentDidMount() {
        //let x = parseInt(this.props.match.params.id)
        axios.get('https://localhost:7149/api/Employee/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    dob: res.data.dob,
                    age: res.data.age,
                    salary: res.data.salary,
                    department: res.data.department
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    onChangetFirstName(e){
        this.setState( {
            firstName: e.target.value
        });
    }
    onChangetLastName(e){
        this.setState( {
            lastName: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangetDoB(e){
        this.setState( {
            dob: e.target.value
        });
    this.onChangetAge(e)   
    }
    onChangetAge(e){
        const today = moment();
        const birthdateMoment = moment(this.state.dob, 'YYYY-MM-DD');
        this.state.age = today.diff(birthdateMoment, 'years');
    }
    onChangeSalary(e){
        this.setState( {
            salary: e.target.value
        });
    }
    onChangeDepartment(e){
        this.setState( {
            department: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        //let y = parseInt(this.props.match.params.id)
        const obj = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            dob : this.state.dob,
            age : this.state.age,
            salary : this.state.salary,
            department : this.state.department
        };

        axios.put('https://localhost:7149/api/Employee/'+this.props.match.params.id,obj)
        .then(res => {
            alert("Employee Updated Successfully");
            this.setState({
                firstName: '',
                lastName: '',
                email:'',
                dob:'',
                age: '',
                salary:'',
                department:''
    
            })
            window.location.replace('/viewEmployee');
        })
        .catch((error) =>{
            console.log(error);
            window.location.replace('/viewEmployee');
        })
       
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h2 className= 'tittle'>Employee Management</h2>
                        <hr/>
                        <h3 className="text-center">Add New Employee</h3>
                        <hr/>
                        <a href = "/viewEmployee" className='btn btn-success'>View Employee</a>
                        <img src = "https://static.vecteezy.com/system/resources/previews/008/627/770/non_2x/company-employees-planning-task-and-brainstorming-flat-illustration-cartoon-people-sharing-ideas-and-meeting-flat-design-modern-illustration-vector.jpg" width={300} />
                        <hr/>
                    </div>
                    <div className='col-lg-8'>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>First Name</label>
                                    <input type="text" class="form-control"  value={this.state.firstName} onChange = {this.onChangetFirstName}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" value={this.state.lastName} onChange = {this.onChangetLastName}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>email Address</label>
                                <input type="email" class="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Date of Birth</label>
                                    <input type="date" class="form-control"  value={this.state.dob} onChange = {this.onChangetDoB}/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Age</label>
                                    <input type="number" readOnly class="form-control" value={this.state.age} onChange = {this.onChangetAge}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Salary (LKR)</label>
                                <input type="number" class="form-control" value={this.state.salary} onChange = {this.onChangeSalary}/>
                            </div>
                            <div class="form-group">
                                <label>Department</label>
                                {/* <input type="number" class="form-control" value={this.state.salary} onChange = {this.onChangeSalary}/> */}
                                <select class="form-control" value={this.state.department} onChange = {this.onChangeDepartment}>
                                    <option>select department....</option>
                                    <option value = "IT">IT</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-success">Update Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
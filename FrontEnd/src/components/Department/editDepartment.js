import  React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

import '../css/style.css';

export default  class editDepartment extends  Component{


    constructor(props){
        super(props);

        this.onChangetDepartmentName = this.onChangetDepartmentName.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:'',
            departmentName: ''
        }

    }

    componentDidMount() {
        let x = parseInt(this.props.match.params.id)
        axios.get('https://localhost:7149/api/Department/'+x)
            .then(res => {
                this.setState({
                    departmentName: res.data.departmentName
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onChangetDepartmentName(e){
        this.setState( {
            departmentName: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
        let y = parseInt(this.props.match.params.id);
        this.state.id = y;
        const obj = {
            id : this.state.id,
            departmentName : this.state.departmentName
        };

        axios.put('https://localhost:7149/api/Department/'+y,obj)
        .then(res => {
            alert("Department Added Successfully");
            this.setState({
                departmentName: ''
    
            })
            window.location.replace('/viewDepartment');
        })
        .catch((error) =>{
            console.log(error);
            window.location.replace('/viewDepartment');
        })
       
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h2 className= 'tittle'>Department Management</h2>
                        <hr/>
                        <h3 className="text-center">Edit Department</h3>
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
                            
                            <button type="submit" className="btn btn-primary">Update Department</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
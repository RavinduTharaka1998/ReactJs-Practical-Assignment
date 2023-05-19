import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        //alert("Delete id is = "+this.props.obj.id);
        let x = parseInt(this.props.obj.id)
        axios.delete('https://localhost:7149/api/Employee/'+x)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        window.location.replace('/viewEmployee');
    }
    render() {
        return (
           <tr>
                <td>
                   {this.props.obj.id}
               </td>
               <td>
                   {this.props.obj.firstName}
               </td>
               <td>
                   {this.props.obj.lastName}
               </td>
               <td>
                   {this.props.obj.email}
               </td>
               <td>
                   {this.props.obj.dob}
               </td>
               <td>
                   {this.props.obj.age}
               </td>
               <td>
                   {this.props.obj.salary}
               </td>
               <td>
                   {this.props.obj.department}
               </td>
               <td>
                   <Link to={"/editEmployee/"+this.props.obj.id} className="btn btn-success">Edit</Link>
                   &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}
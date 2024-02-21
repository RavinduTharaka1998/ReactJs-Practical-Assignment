import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";


export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        //alert("Delete id is = "+this.props.obj.id);
        let x = parseInt(this.props.obj.id)
        axios.delete('https://localhost:7149/api/Department/'+x)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        
        window.location.replace('/viewDepartment');
    }
    render() {
        return (
           <tr>
                <td>
                   {this.props.obj.id}
               </td>
               <td>
                   {this.props.obj.departmentName}
               </td>
               <td>
                   <Link to={"/editDepartment/"+this.props.obj.id} className="btn btn-success">Edit</Link>
                   &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}
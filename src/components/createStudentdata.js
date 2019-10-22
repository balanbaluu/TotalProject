import React, { Component } from 'react';
import axios from 'axios';
import './create.css'
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
    this.onChangeRegNumber = this.onChangeRegNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
     student_name: '',
      school_name: '',
     reg_number:''
    }
  }
  onChangeStudentName(e) {
    this.setState({
     student_name: e.target.value
    });
  }
  onChangeSchoolName(e) {
    this.setState({
      school_name: e.target.value
    })  
  }
  onChangeRegNumber(e) {
    this.setState({
     reg_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
     student_name: this.state.student_name,
      school_name: this.state.school_name,
     reg_number: this.state.reg_number

    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
     student_name: '',
     school_name: '',
     reg_number: ''
    })
  }
 
  render() {
    return (
        <div className='outer' style={{ marginTop: 10 }}>
            <h3>Add Student Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.student_name}
                      onChange={this.onChangeStudentName}
                      />
                </div>
                <div className="form-group">
                    <label>School Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.school_name}
                      onChange={this.onChangeSchoolName}
                      />
                </div>
                <div className="form-group">
                    <label>Register Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.reg_number}
                      onChange={this.onChangeRegNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
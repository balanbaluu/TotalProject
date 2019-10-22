import React, { Component } from 'react';
import axios from 'axios';
import './create.css'
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
    this.onChangeRegNumber= this.onChangeRegNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      student_name: '',
      school_name: '',
      reg_number:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                student_name: response.data.student_name, 
                school_name: response.data.school_name,
                reg_number: response.data.reg_number });
          })
          .catch(function (error) {
              console.log(error);
          })
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
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div className="outer" style={{ marginTop: 10 }}>
            <h3 align="center">Update Student Details</h3>
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
                    <input type="submit" 
                      value="Submit" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
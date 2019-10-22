
import React, { Component } from 'react';
import axios from 'axios';
import StudentData from './StudentData';
import './create.css'
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    studData(){
      return this.state.business.map(function(object, i){
          return <StudentData obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div className="outer">
          <h3 align="center">Student Profile</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <div className="row">
             
{ this.studData() }
             

              
            </div>
          </table>
        </div>
      );
    }
  }

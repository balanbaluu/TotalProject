
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
      <div class="outer">
      {/* <img src="https://i.pinimg.com/originals/d0/de/c9/d0dec9a309ac8b592051805da3c47008.jpg" class="img-responsive portfolio_frontpage"/> */}
        
        <div class="row portfolio-block">
            <div class="portfolio_description" style={{textAlign:'center'}}>
              <div className="card " style={{width: '18rem'}} >
                <div  className="row center-block" style={{marginTop:10}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgHwzy_u5UaMf1EHwHw3jxlRFA3LXGY9eoEiKN7iJZJxUduGS" style={{width:'90%',height:'90%',}}/>
                </div>
               <div className="row">
                 <div  class=" col-sm-6">
                 <p >student Name  :</p>
                 </div>
                 <div class=" col-sm-6">
                 <p> {this.props.obj.student_name}</p>
                 </div>
                 <div className="row">
                 <div  class=" col-sm-6">
                 <p >school Name  :</p>
                 </div>
                 <div class=" col-sm-6">
                 <p> {this.props.obj.school_name}</p>
                 </div>
             
               <div className="row">
                 <div  class=" col-sm-6">
                 <p >Reg Number  :</p>
                 </div>
                 <div class=" col-sm-6">
                 <p> {this.props.obj.reg_number}</p>
                 </div>
             
                <div className="row" style={{marginTop:10}}>
                <div class=" col-md-4">  <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link></div> 
                <div class=" col-md-8"> <button onClick={this.delete} className="btn btn-danger">Delete</button>
               
                </div>
                </div>
               </div>
               </div>
                <div>
              </div>
              </div>
              </div>
    </div>
    </div>
    </div>
    );
  }
}

export default TableRow;
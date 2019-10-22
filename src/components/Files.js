
import React, { Component } from 'react';
import axios from 'axios';
import './create.css'
 class Files extends Component {
        constructor(props){
            super(props);
            this.delete = this.delete.bind(this);
                this.state={
                    selectedFile: null
           
                }
            
        }
        fileSelectHandler = event =>{
          this.setState({
            selectedFile: event.target.files[0]
          })
        }
        onUploadHandler=()=>{
    const fd = new FormData();
    fd.append('file',this.state.selectedFile,this.state.selectedFile.name)
    axios.post('http://localhost:4000/file/add',fd)
    .then(res=>{
      console.log(res)
    })
        }
        delete() {
          axios.get('http://localhost:4000/file/delete/'+this.props.obj)
              .then(console.log('Deleted'))
              .catch(err => console.log(err))
      }
  render() {
    return (
        <div className="outer" style={{ marginTop: 10 }}>
            <div className="row">
                <div className='offset-md-3 col-md-6'>
                <div className='form-group files'>
                    <label>Upload Your File</label>
                    <input type="file" name="file" onChange={this.fileSelectHandler}/>
               </div>
               <button type="button" class="btn btn-success btn-block" onClick={this.onUploadHandler}>Upload</button> 
               <button onClick={this.delete} className="btn btn-danger btn-block">Delete</button></div> 
                </div>
              

            </div>
    
       
    )
  }
}

export default Files
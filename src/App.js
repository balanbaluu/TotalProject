


import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Contact from './components/Contact'
import Post from './components/Post'
import Create from './components/createStudentdata'
import Index from './components/index.component'
import Edit from './components/editStudentdata'
import Files from './components/Files'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/contact' component={Contact} />
            <Route path='/create' component={Create} />
            <Route path='/edit' component={Edit} />
            <Route path='/index' component={Index} />
            <Route path='/files' component={Files} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
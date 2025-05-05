// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=20;
  country='us'
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
<div>
<LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
      
<NavBar/>
<BrowserRouter>
   <Routes>
        <Route exact path='/'element={<News  setprogress={this.setprogress} key="general" pageSize={this.pageSize} country={this.country}category='general'/>}/>
        <Route exact path='/business'element={<News  setprogress={this.setprogress} key="business" pageSize={this.pageSize} country={this.country}category='business'/>}/>
        <Route exact path='/entertainment'element={<News  setprogress={this.setprogress} key="entertainment" pageSize={this.pageSize} country={this.country}category='entertainment'/>}/>
        <Route exact path='/general'element={<News  setprogress={this.setprogress} key="general" pageSize={this.pageSize} country={this.country}category='general'/>}/> 
        <Route exact path='/health'element={<News  setprogress={this.setprogress} key="health" pageSize={this.pageSize} country={this.country}category='health'/>}/>
        <Route exact path='/science'element={<News  setprogress={this.setprogress} key="science" pageSize={this.pageSize} country={this.country}category='science'/>}/>
        <Route exact path='/sports'element={<News  setprogress={this.setprogress} key="sports" pageSize={this.pageSize} country={this.country}category='sports'/>}/> 
        <Route exact path='/technology'element={<News  setprogress={this.setprogress} key="technology" pageSize={this.pageSize} country={this.country}category='technology'/>}/>
   </Routes>
</BrowserRouter>
      </div>
      
    )
  }
}



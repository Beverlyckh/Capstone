import React, { Component } from 'react';
import './App.css';
import Landing from './components/landingpage'
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
class App extends Component {
  render() {
    return (
      
<div className="demo-big-content">
<Layout>
    <Header className ="header-color" title="Road Trip Advisor" scroll>
        <Navigation>
            <a href="/">Home</a>
            <a href="/">Plan a trip</a>
            <a href="/">Sign Up</a>
            <a href="/">Sign In</a>
        </Navigation>
    </Header>
    <Drawer title="Menu">
        <Navigation>
        <a href="/">Home</a>
        <a href="/">Plan a trip</a>
        <a href="/">Sign Up</a>
        <a href="/">Sign In</a>
        </Navigation>
    </Drawer>
    <Content>
        <div className="page-content">
          <Landing/>
        </div>
        
    </Content>
</Layout>
</div>
    );
  }
}

export default App;

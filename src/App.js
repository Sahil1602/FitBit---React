import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';

class App extends React.Component{

  state = {
    api: 'https://i.imgur.com/kGKURRz.png',
    time: '',
    heartDisplay: 'none',
    timeDisplay: 'none'
  }

  pinkBtnClick = () =>{
    this.setState({api: 'https://i.imgur.com/kGKURRz.png'})
  }

  purpleBtnClick = () =>{
    this.setState({api: 'https://i.imgur.com/XZelYeF.png'})
  }

  blueBtnClick = () =>{
    this.setState({api: 'https://i.imgur.com/o5GrXPY.png'})
  }

  blackBtnClick = () =>{
    this.setState({api: 'https://i.imgur.com/b93SkNQ.png'})
  }

  redBtnClick = () =>{
    this.setState({api: 'https://i.imgur.com/HBePqYg.png'})
  }
  
  getTime = () =>{
    this.setState(
      {
        heartDisplay: 'none',
        timeDisplay: 'block',
      }
    )
  }

  getHeartRate = () =>{
    this.setState({
      timeDisplay: 'none',
      heartDisplay: 'block',
      
    })
  }
  
  gettingTime = setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds= "0" + seconds;
    }
    this.setState({time: hours +":" + minutes + ":" + seconds})
}, 1000);

  render(){
    
    // console.log(this.d.getSeconds())
    return (
      <div>
        <TopBar />
        <div className="pageWrap">
        <div className="mainDisplay">
          <img className="display" src= {this.state.api} />
          <i class="fas fa-heartbeat" id="heartBeat" style={{display: this.state.heartDisplay}}></i>
          <p className="heartRate" style={{display: this.state.heartDisplay}}>79</p>
          <p className="time" style={{display: this.state.timeDisplay}}>{this.state.time}</p>
        </div>
        <div className="details">
          <h1 className="heading">FitBit 20 - The Smartest Watch</h1>
          <p className="description">lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.</p>
          <h3 className="selectHeading">Select Color</h3>
          <div className="selectWrap">
            <img className="pink" onClick={this.pinkBtnClick} src="https://i.imgur.com/kGKURRz.png" />
            <img className="purple" onClick={this.purpleBtnClick} src="https://i.imgur.com/XZelYeF.png" />
            <img className="blue" onClick={this.blueBtnClick} src="https://i.imgur.com/o5GrXPY.png" />
            <img className="black" onClick={this.blackBtnClick} src="https://i.imgur.com/b93SkNQ.png" />
            <img className="red" onClick={this.redBtnClick} src="https://i.imgur.com/HBePqYg.png" /> 
          </div>
          <h3 className="featureHeading">Features</h3>
          <div className="featuresWrap">
            <button className="timeFeature" onClick={this.getTime}>Time</button>
            <button className="heartRateFeature" onClick={this.getHeartRate}>Heart Rate</button>
          </div>
          <button className="buyNowButton">Buy Now</button>
        </div>
      </div>
      </div>
      
    )
  }
  
    
  
}

export default App;

import React, { Component } from 'react';

import Calendar from 'react-calendar';

import './App.css';
class App extends Component {
  state = {
    selectedDate : this.date,
    title : "",
    image_url : "",
    pod_url : "",
    description : ""

    
  }

  clickDay = (value, event)  => {
    this.setState({selectedDate : value})
    //alert('Clicked day: ', event)
    console.log(value)
    
    let d = value,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    let url = `http://localhost:5000/pods?date=${ [year, month, day].join('-')}`
    console.log(url)


    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
      this.setState({image_url : myJson.image_url})
      this.setState({title : myJson.title})
      this.setState({description : myJson.description})
    });

    //console.log(event)
  }


  render(){
    //  fetch()
    
    return (
    
    <div className="App">
      <div >


        <div className="maincontainer">
          <div className="smallcontainer">
          <h1>Launch Team X </h1>
            <Calendar
            onChange={this.onChange}
            onClickDay={this.clickDay}
            value={this.state.date}
            />
              

          </div>
          <div className="smallcontainer">
            <h1>{this.state.title}  </h1>
            <img src={this.state.image_url} alt="" />
            <p className="description">{this.state.description}</p>
          </div>


        </div>  
      </div>
    </div>

    );
  }
}

export default App;

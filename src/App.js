import React, { Component } from 'react';

import Calendar from 'react-calendar';

import './App.css';
class App extends Component {
  state = {
    selectedDate : this.date
    
  }

  clickDay(value, event) {
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

    console.log(`http://localhost:5000/${ [year, month, day].join('-')}/`)


    fetch(`http://localhost:5000/${ [year, month, day].join('-')}/`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });

    //console.log(event)
  }


  render(){
    //  fetch()
    
    return (
    
    <div className="App">
      <div className="bgimg w3--display--container w3--text--white">
        <div className="w3--display--middle main--container">
          <h1>Picture of the day</h1>
          <h2>Selected date: {this.state.selectedDate}</h2>
          <div>
            <Calendar
            onChange={this.onChange}
            onClickDay={this.clickDay}
            value={this.state.date}
            />
              

          </div>



        </div>  
      </div>
    </div>

    );
  }
}

export default App;

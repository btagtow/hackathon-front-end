import React, { Component } from 'react';

import Calendar from 'react-calendar';

import './App.css';
class App extends Component {
  state = {
    pod :
      {
        "apod_site":"https://apod.nasa.gov/apod/ap181027.html",
        "copyright":"Yuri Beletsky (Carnegie Las Campanas Observatory, TWAN)",
        "date":"2018-10-27",
        "description":"The best known asterism in northern skies hangs over the Canadian Rockies in this mountain and night skyscape taken last week from Banff National Park. But most remarkable is the amazing greenish airglow. With airglow visible to the eye, but not in color, the scene was captured in two exposures with a single camera, one exposure made while tracking the stars and one fixed to a tripod. Airglow emission is predominately from atmospheric oxygen atoms at extremely low densities. Commonly recorded in color by sensitive digital cameras the eerie, diffuse light is seen here in waves across the northern night. Originating at an altitude similar to aurorae, the luminous airglow is due to chemiluminescence, the production of light through chemical excitation and radiative decay. Energy for the chemical excitation is provided during daytime by the Sun's extreme ultraviolet radiation. Unlike aurorae which are limited to high latitudes, airglow can be found around the globe.",
        "hdurl":"https://apod.nasa.gov/apod/image/1810/airglow_banff_beletsky.jpg",
        "media_type":"image",
        "title":"Airglow Borealis",
        "url":"https://apod.nasa.gov/apod/image/1810/airglow_banff_beletsky1082.jpg"
      }
    
  }

  clickDay(value, event) {

    alert('Clicked day: ', value)
    //console.log(event)
  }
  render(){
    //  fetch()
    
    return (
    
    <div className="App">
      <div className="leftside">
        
        <Calendar
        onChange={this.onChange}
        onClickDay={this.clickDay()}
        value={this.state.date}
        />
          
      </div>
      <div className="main">
        <div>

        </div>
      </div>
    </div>

    );
  }
}

export default App;

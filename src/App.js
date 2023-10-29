import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TimerComponent from './TimerComponent';
import React, { Component } from 'react';
import CardComponent from './Card';


class App extends Component {

  // constructor(props) {
  //   super(props);

  //   // Déclarez et initialisez l'état dans le constructeur
  //   this.state = {
  //     person: {
  //       fullName: 'John Doe',
  //       bio: 'A brief biography...',
  //       imgSrc: './logo192.png',
  //       profession: 'Software Developer'
  //     },
  //     shows: true ,
      
  //   }
  // }
 // Function to toggle the "shows" state
//  toggleShow = () => {
//   this.setState(prevState => ({
//     shows: !prevState.shows
//   }));
// }
  render() {

    // const containerStyles = {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh',
    //   margin: 0,
    // };

    return (
      // <div class="centered-element" >
      //  <div>
      //  <button onClick={this.toggleShow}>
      //     Toggle Profile
      //   </button>
      //   {this.state.shows && (
      //     <div>
      //       <h2>{this.state.person.fullName}</h2>
      //       <p>{this.state.person.bio}</p>
      //       <img src={this.state.person.imgSrc} alt="Avatar" />
      //       <p>{this.state.person.profession}</p>
      //     </div>
      //   )}
      // </div>
      <div>
        <CardComponent/>
      <TimerComponent/>
      </div>
    );
  }
}

export default App;

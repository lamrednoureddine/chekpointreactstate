import React, { Component } from 'react';
import './CardComponent.css'; // Importez le fichier CSS
import './App.css';

class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Lamred noureddine',
        bio: ' welcome to my profil',
        imgSrc: './photo.png',
        profession: 'Developpeur informatique',
      },
      shows: true,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Afficher</button>
        {this.state.shows && (
          <div className="card">
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Avatar" style={{ width: '200px',height:'200px' }}/>
            <p>{this.state.person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CardComponent;

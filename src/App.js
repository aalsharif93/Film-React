import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import TMDB from "./TMDB";
class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing films={TMDB.films} />
        </div>
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;



 //   // Uppercase is for component & Lowercase is for elemnts 

    //   <div className="App">
      
    //   <Navigation appTitle = {this.props.title}/>
    //    <Banner/>
    //    { this.props.information.map(el => <Column title={el.title} information={el.desc} />)}
      

    //   </div>
    // )
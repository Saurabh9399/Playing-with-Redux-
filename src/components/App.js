import React from "react";
import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("store state", this.props.store.getState());
  }

  render() {
    const { list } = this.props.store.getState(); // {list:[],favourites:[]}
    console.log("this.state", this.props.store.getState());
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

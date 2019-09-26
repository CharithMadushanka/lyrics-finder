import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../ContextController";
import Tracks from "../tracks/tracks.component";

function Search() {
  const [trackTitle, setTrackTitle] = useState("");

  const [state, setState] = useContext(Context);

  useEffect(() => {
    if (trackTitle) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${ process.env.REACT_APP_KEY }`
        )
        .then(res => {
          console.log(res.data.message.body.track_list);
          setState({
            trackList: res.data.message.body.track_list,
            heading: "Search Results"
          });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${ process.env.REACT_APP_KEY }`
        )

        .then(res => {
          console.log(res.data.message.body.track_list);
          setState({
            trackList: res.data.message.body.track_list,
            heading: "Top 10 Tracks"
          });
        })

        .catch(err => console.log(err));
    }
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(e.target.elements.userInput.value);
  };

  return (
    
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            name="userInput"
            className="form-control form-control-lg"
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

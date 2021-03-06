import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../spinner/spinner.component";

function Lyrics({ match }) {
  const [track, setTrack] = useState({})
  const [lyrics, setLyrics] = useState({})

  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=${ process.env.REACT_APP_KEY }`)
    .then(res => {
      setLyrics(res.data.message.body.lyrics)
      console.log(res.data.message.body.lyrics)
    })

    axios
    .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=${ process.env.REACT_APP_KEY }`)
    .then(res => {
      setTrack(res.data.message.body.track)
      console.log(res.data.message.body.track)
    })

  },[])

  if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0)
  {
    return <Spinner />
  }
  else
  {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
        <div className="card">
          <h5 className="card-header" >
            {track.track_name} by {" "} <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>: {track.primary_genres.music_genre_list.length === 0 ? "NO GENRE AVAILABLE" : track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}
          </li>
        </ul>
      </>
    );
  }
}

export default Lyrics;

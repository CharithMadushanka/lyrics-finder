import React from 'react'
import { Link } from 'react-router-dom'

function Track({ track }) {
    return (
        
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <p className="card-text"><i className="far fa-play-circle"></i><strong> Track</strong> : {track.track_name}</p>
                    <p className="card-text"><i className="fas fa-compact-disc"></i><strong> Album</strong> : {track.album_name}</p>
                    <Link to={`/lyrics/track/`+track.track_id} className="btn btn-dark btn-block" >View Lyrics</Link>
                </div>
            </div>
        </div>
    )
}

export default Track

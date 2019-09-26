import React, { useContext } from "react";
import { Context } from "../../ContextController";
import Track from "../track/track.component";
import Spinner from "../spinner/spinner.component";

function Tracks() {
  const [state, setState] = useContext(Context);
  const { trackList, heading } = state;

  if(trackList === undefined || trackList.length === 0)
  {
    return <Spinner />
  }
  else
  {
    return (
      <div>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {trackList.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tracks;

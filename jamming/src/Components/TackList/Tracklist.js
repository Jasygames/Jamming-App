import React from 'react';
import styles from './TracjList.css'
import Track from '../Track/Track';

function Tracklist (props) {
    return (
        <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchRsults.map ((track) => (
            <Track track={track} key={track.id}/>
        ))}   
      </div>
    );
}

export default Tracklist;
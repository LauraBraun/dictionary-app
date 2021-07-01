import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics (props) {
    return(<div> <ReactAudioPlayer
  src={props.phonetic.audio}
  autoPlay={false}
  controls
  />
    <br />
    {props.phonetic.text}
    </div>);
}
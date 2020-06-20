import React from 'react';
import './AudioPlayer.scss';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

interface AudioPlayerProps{
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  [key:string]: any;
}
function AudioPlayer({src, autoPlay= false, muted= false}:AudioPlayerProps){
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const audioRef = React.useRef<any>(null);
  const [value, setValue] = React.useState(0);
  function handleChange(e:any){
    console.log(e.target.value);
    const curTime = Number(e.target.value) * audioRef.current.duration;

    audioRef.current.currentTime = curTime;
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    console.log(curPercentage+'%')
    setValue(e.target.value)
  }
  function handleTime(){
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    console.log(curPercentage+'%')
    setValue(curPercentage)
  }

  return(
    <div>
      <audio onLoadedData={()=>{}} onTimeUpdate={handleTime} ref={audioRef} src={src}  controls/>
      <input min={0} max={1} step="any" value={value}  type="range" style={{width: '100%'}} onChange={handleChange} />
    </div>
  )
}
export default AudioPlayer;


import React from 'react';
import './AudioPlayer.scss';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

interface AudioPlayerProps{
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  onLoadedMeta?:()=>void;
  onLoaded?:()=>void;
  onCanPlay?:()=>void;
  onCanPlayThrough?:()=>void;
  onPlay?: (e:any)=>void;
  onPause?: ()=>void;
  onSeeked?: (e:any)=>void;
  onEnded?: (e:any)=>void;
  render?: (e:any)=>any;
  [key:string]: any;
}
function AudioPlayer({src, autoPlay= false, muted= false, onPlay, onSeeked, onEnded,render}:AudioPlayerProps,ref:any, ){
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const audioRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);

  React.useImperativeHandle(ref, ()=>({
    play(){
      audioRef.current?.play()
    },
    pause(){
      audioRef.current?.pause()
    },
    setCurrentTime(time:any){
      audioRef.current.currentTime = time;
    },
    addSeconds(time:any){
      audioRef.current.currentTime += time;
    }

  }))
  function handleChange(e:any){
    const curTime = Number(e.target.value) * audioRef.current.duration;
    audioRef.current.currentTime = curTime;
    
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    console.log(curPercentage+'%')
    onSeeked?.({
      currentTime: curTime,
      currentPercentage: curPercentage,
    });
    setValue(curPercentage);
    //setValue(e.target.value)
  }
  function handleTime(){
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    console.log(curPercentage+'%')
    setValue(curPercentage)
  }

  function handleLoadedData(){
    console.log('loadedData')
    setIsLoading(false);
  }
  function handleLoadedMeta(){
    console.log('handleLoadedMeta');
    //setDuration(audioRef.current.duration);
  }
  function handleEnded(){
    console.log('handleEnded');
    onEnded?.({});
  }
  function handlePaused(){
    console.log('handlePaused');
  }
  function handlePlay(){
    console.log('handlePlay');
    onPlay?.({
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
      currentPerentage: (audioRef.current.currentTime / audioRef.current.duration)
    })
  }
  // if(isLoading){
  //   return (
  //     <div>
  //       <h1>Loadding...</h1>
  //     </div>
  //   )
  // }
  if(render){
    return (
      <>
        <audio preload="metadata" onTimeUpdate={handleTime} onLoadedMetadata={handleLoadedMeta} onLoadedData={handleLoadedData} src={src} ref={audioRef}  autoPlay={autoPlay}/>
        {render({
          value,
          duration: audioRef.current?.duration,
          currentTime: audioRef.current?.currentTime,
        })}
      </>
    );
  }
  return(
    <div>
      <audio preload="metadata" onLoadedMetadata={handleLoadedMeta} onLoadedData={handleLoadedData} onPlay={handlePlay} onPause={handlePaused} onEnded={handleEnded} onTimeUpdate={handleTime} ref={audioRef} src={src}  controls/>
      {isLoading && <h1>Loadding...</h1>}
      <input min={0} max={1} step="any" value={value}  type="range" style={{width: '100%'}} onChange={handleChange} />
    </div>
  )
}
export default React.forwardRef(AudioPlayer);


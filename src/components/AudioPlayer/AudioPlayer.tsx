import React from 'react';
import './AudioPlayer.scss';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

interface AudioPlayerProps{
  src: string;
  loop?:boolean;
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
  onVolumeChanged?: () =>void;
  render?: (e:any)=>any;
  [key:string]: any;
}
function AudioPlayer({src, autoPlay= false,loop=false, muted= false, onVolumeChanged,  onPlay, onSeeked,onPause,onLoadedMeta, onEnded, onListen ,render}:AudioPlayerProps,ref:any, ){
  // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();
  const audioRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);

  React.useImperativeHandle(ref, ()=>({
    play(){
      audioRef.current?.play();
    },
    pause(){
      audioRef.current?.pause();
    },
    setCurrentTime(time:any){
      audioRef.current.currentTime = time;
    },
    addSeconds(time:any){
      audioRef.current.currentTime += time;
    }

  }));
  function handleCurrentTime(time:any){
    audioRef.current.currentTime += time;
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration);
    setValue(curPercentage);
  }
  function handleChange(e:any){
    const curTime = Number(e?.target?.value) * audioRef.current.duration;
    audioRef.current.currentTime = curTime;
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    onSeeked?.({
      currentTime: curTime,
      currentPercentage: curPercentage,
    });
    setValue(curPercentage);
  }
  function handleTimeUpdate(){
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    onListen?.({
      currentPercentage: curPercentage,
      currentTime: audioRef.current.currentTime,
    })
    setValue(curPercentage)
  }

  function handleLoadedData(){
    console.log('loadedData');
    console.log(audioRef.current.volume);
    setIsLoading(false);
  }
  function handleLoadedMeta(){
    console.log('handleLoadedMeta');
    onLoadedMeta?.();
  }
  function handleEnded(){
    console.log('handleEnded');
    onEnded?.({});
  }
  function handlePaused(){
    onPause?.();
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
  function handleVolumeChanged(){
    console.log('handleVolumeChanged');
    console.log(audioRef.current.volume);
  }

  if(render){
    return (
      <>
        <audio muted={muted} loop={loop} preload="metadata"  onPlay={handlePlay}  onPause={handlePaused}  onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMeta} onLoadedData={handleLoadedData} src={src} ref={audioRef} autoPlay={autoPlay}/>
        {render({
          value,
          duration: audioRef.current?.duration,
          currentTime: audioRef.current?.currentTime,
          handleChange: (e:any)=>handleChange(e),
          play: () => audioRef.current?.play(),
          pause: () => audioRef.current?.pause(),
          addCurrentTime: (time:any) => handleCurrentTime(time),
        })}
      </>
    );
  }
  return(
    <div>
      <audio onVolumeChange={handleVolumeChanged}  muted={muted}  loop={loop} preload="metadata" onLoadedMetadata={handleLoadedMeta} onLoadedData={handleLoadedData} onPlay={handlePlay} onPause={handlePaused} onEnded={handleEnded} onTimeUpdate={handleTimeUpdate} ref={audioRef} src={src}  controls/>
      {isLoading && <h1>Loadding...</h1>}
      <input min={0} max={1} step="any" value={value}  type="range" style={{width: '100%'}} onChange={handleChange} />
    </div>
  )
}
export default React.forwardRef(AudioPlayer);


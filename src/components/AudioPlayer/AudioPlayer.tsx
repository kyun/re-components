import React from 'react';
import './AudioPlayer.scss';


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
function AudioPlayer({src, autoPlay= false,loop=false, muted= false, controls= false, onVolumeChanged,  onPlay, onSeeked,onPause,onLoadedMeta, onEnded, onListen ,render}:AudioPlayerProps,ref:any, ){
  const audioRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [canPlay, setCanPlay] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

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

  }));
  function handleLoadedMeta(e:any){
    setIsLoaded(true);

    console.log('handleLoadedMeta');
    console.log(e.target.duration);
    onLoadedMeta?.();
  }
  function handleLoadedData(e:any){
    setIsLoaded(true);
    console.log('loadedData');
 
    setIsLoading(false);
  }
  function handleCanPlay(e:any){
    setCanPlay(true);
    console.log('handleCanPlay')

  }
  function handleCanPlayThrough(e:any){
    console.log('handleCanPlayThrough')

  }


  function handleChange(e:any){
    // console.log('handleChange')
    const curTime = Number(e?.target?.value) * audioRef.current.duration;
    audioRef.current.currentTime = curTime;
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    setValue(curPercentage);
  }
  function handleTimeUpdate(){
    console.log('handleTimeUpdate')
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration)
    onListen?.({
      currentPercentage: curPercentage,
      currentTime: audioRef.current.currentTime,
    })
    setValue(curPercentage)
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
    onVolumeChanged?.();
    console.log(audioRef.current.volume);
  }
  function handleCurrentTime(time: any){
    audioRef.current.currentTime = time;
    const curPercentage = (audioRef.current.currentTime / audioRef.current.duration);
    setValue(curPercentage);
  }

  function handleVolume(volume: number){
    console.log(volume);
    setVolume(volume);
    audioRef.current.volume = volume;
  }
  function handleSeeking(e:any){
    console.log('handleSeeking');
  }
  function handleSeeked(e:any){
    console.log(e.target);
    onSeeked?.({
      currentTime: e.target.currentTarget,
      currentPercentage: (e.target.currentTime / e.target.duration),
    });
  }
  function handleError(e:any){
    console.log('handleError');
    setHasError(true);
  }
  function handleAbort(e:any){
    console.log('handleAbort')
    setHasError(true);
  }



  /* rendering */
  return (
    <React.Fragment>
      <audio 
        muted={muted}  loop={loop} preload="metadata"
        ref={audioRef} 
        src={src}  
        onLoadedMetadata={handleLoadedMeta} 
        onLoadedData={handleLoadedData} 
        onCanPlay={handleCanPlay}
        onCanPlayThrough={handleCanPlayThrough}

        onSeeking={handleSeeking}
        onSeeked={handleSeeked}  

        onTimeUpdate={handleTimeUpdate} 

        onError={handleError}
        onAbort={handleAbort}
        onVolumeChange={handleVolumeChanged} 

        onPlay={handlePlay} 
        onPause={handlePaused} 
        onEnded={handleEnded} 
        controls={controls}
        />
        {
          render?.({
            value,
            duration: audioRef.current?.duration,
            currentTime: audioRef.current?.currentTime,
            volume: volume,
            setVolume: (volume: number) => handleVolume(volume),
            handleChange: (e:any)=>handleChange(e),
            play: () => audioRef.current?.play(),
            pause: () => audioRef.current?.pause(),
            setCurrentTime: (time: any) => handleCurrentTime(time),
            
          })
        }
    </React.Fragment>
  )
  
  return(
    <div>
      <audio 
      muted={muted}  loop={loop} preload="metadata"
      ref={audioRef} 
      src={src}  

      onError={handleError}
      onCanPlay={handleCanPlay}
      onCanPlayThrough={handleCanPlayThrough}
      onAbort={handleAbort}
      onVolumeChange={handleVolumeChanged} 
      onSeeked={handleSeeked}   
      onLoadedMetadata={handleLoadedMeta} 
      onLoadedData={handleLoadedData} 
      onPlay={handlePlay} 
      onPause={handlePaused} 
      onEnded={handleEnded} 
      onTimeUpdate={handleTimeUpdate} 

      controls/>
      {isLoading && <h1>Loadding...</h1>}
      <input min={0} max={1} step="any" value={value}  type="range" style={{width: '100%'}} onChange={handleChange} />
    </div>
  )
}
export default React.forwardRef(AudioPlayer);


import React from 'react';
import './InputPIN.css';
import InputPIN from '../components/InputPIN';
import Input from '../components/Input';
import Modal from '../components/Modal';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';
import { ECANCELED } from 'constants';

function IndexPage(){
  const ref = React.useRef<any>(null);

  function watchPlay(e:any){
    console.log('watchPlay');
  }
  function watchListen(e:any){
    console.log('watchListen');

  }
  function watchPause(e:any){
    console.log('watchPause');

  }
  function watchSeek(e:any){
    console.log('watchSeek')
  }
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        {/* <AudioPlayer onPlay={watchPlay} onSeeked={watchSeek} ref={ref} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} />
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>

        <Button onClick={()=>handleTime(-5)}>-5sec</Button>
        <Button onClick={()=>handleTime(5)}>5sec</Button> */}

        <AudioPlayer ref={ ref} onPlay={watchPlay} onPause={watchPause} onSeeked={watchSeek} onListen={watchListen} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} render={CustomRender} autoPlay={false}/>

      </div>
    </main>
  )
}

function CustomRender(props:any){
  //console.log(props);
  return (
    <div>
      <span>{props.currentTime}</span><br/>
      <input min={0} max={1} step="any" type="range" value={props.value} onChange={props.handleChange} />
      <div>
        <Button onClick={props.play}>play!</Button>
        <Button onClick={props.pause}>Pause</Button>
        <Button onClick={()=>props.addCurrentTime(-5)}>-5</Button>
        <Button onClick={()=>props.addCurrentTime(5)}>5</Button>
        {/* <Button onClick={()=>props.setValue(0)}>reset</Button> */}
      </div>
    </div>
  )
}
export default IndexPage;
import React from 'react';
import './InputPIN.css';
import InputPIN from '../components/InputPIN';
import Input from '../components/Input';
import Modal from '../components/Modal';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';

function IndexPage(){
  const [value, setValue] = React.useState('');
  const ref = React.useRef<any>(null);
  const barRef = React.useRef<any>(null);

  // React.useEffect(()=>{
  //   ref.current?.play()
  // },[]);
  function handlePlay(){
    ref.current?.play();
  }
  function handlePause(){
    ref.current?.pause();
  }
  function handleTime(time:number){
    ref.current?.addSeconds(time);
  }
  function watchPlay(e:any){
    console.log(e);
  }
  function watchSeek(e:any){
    console.log(e);
  }
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <AudioPlayer onPlay={watchPlay} onSeeked={watchSeek} ref={ref} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} />
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>

        <Button onClick={()=>handleTime(-5)}>-5sec</Button>
        <Button onClick={()=>handleTime(5)}>5sec</Button>

        <AudioPlayer src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} render={CustomRender} autoPlay={false}/>

      </div>
    </main>
  )
}

function CustomRender(props:any){
  console.log(props);
  return (
    <div>
      <span>{props.currentTime}</span>
      <div>
        <Button onClick={props.handlePlay}>Playing!</Button>
      </div>
    </div>
  )
}
export default IndexPage;
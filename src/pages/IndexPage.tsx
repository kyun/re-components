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
  // //const curPercentage = ((ref?.current?.curTime / ref?.current?.duration) * 100) || 0 ;
  // const curPercentage = React.useMemo(()=>{
  //   return ((ref?.current?.curTime / ref?.current?.duration) * 100) || 0 
  // },[ref.current]);
  // function handleStart(){
  //   if(ref.current){
  //     ref?.current.start();
  //   }
  // }
  // function updateTimeOnMove(e:any){
  //   const clickPositionInPage = e.pageX;
  //   const barStart = barRef?.current.getBoundingClientRect().left + window.scrollX;
  //   const barWidth = barRef?.current.offsetWidth;
  //   const clickPositionInBar = clickPositionInPage - barStart;
  //   const timePerPixel = ref?.current.duration / barWidth;
  //   console.log(timePerPixel * clickPositionInBar);
  //   const res = timePerPixel * clickPositionInBar
  //   ref?.current.setClickedTime(res)
  // }
  // function handleDrag(e:any){
 
  //   document.addEventListener('mousemove',updateTimeOnMove);
  //   document.addEventListener("mouseup", () => {
  //     document.removeEventListener("mousemove", updateTimeOnMove);
  //   });
  // }
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <AudioPlayer ref={ref} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} />
        {/* <Button onClick={handleStart}>Start</Button>
        <Button onClick={()=>ref?.current.pause()}>Pause</Button>
        <div style={{margin: 8, position: 'relative'}}>
          <div ref={barRef} onMouseDown={handleDrag} style={{background: 'red', width: '100%', height: '8px'}} />
          <span
            className="bar__progress__knob"
            style={{ display: 'block', width: 20, height: 20, background: 'red', left: `${curPercentage - 2}%`, position: 'absolute' }}
          />
        </div> */}
      </div>
    </main>
  )
}
export default IndexPage;
import React from 'react';
import './InputPIN.css';
import InputPIN from '../components/InputPIN';
import Input from '../components/Input';
import Modal from '../components/Modal';
import AudioPlayer from '../components/AudioPlayer';
import Button from '../components/Button';
import { ECANCELED } from 'constants';
import Countdown from '../components/Countdown';
import './cannon.scss';

function IndexPage(){
  const ref = React.useRef<any>(null);
  const [color, setColor] = React.useState('black');

  function watchPlay(e:any){
    console.log('watchPlay');
  }
  function watchListen(e:any){
    console.log('watchListen',e);

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
        <AudioPlayer ref={ ref} onPlay={watchPlay} onPause={watchPause} onSeeked={watchSeek} onListen={watchListen} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`} render={CustomRender} autoPlay={false}/>
        {/* <AudioPlayer controls ref={ ref} onPlay={watchPlay} onPause={watchPause} onSeeked={watchSeek} onListen={watchListen} src={`https://d2cmeu8d0v67u4.cloudfront.net/audio-merge/201788_bgTykQn9wtWBcBVt4KYf.m4a`}autoPlay={false}/> */}
      </div>
    </main>
  )
}

function CustomRender(props:any){
  const [vol, setVol] = React.useState(0);
  const modalRef = React.useRef<any>(null);
  const [pressed, setPressed] = React.useState(false);
  const [start, setStart] = React.useState<any>(0);
  const [shoot, setShoot] = React.useState(false);
  useInterval(() => {
    // Your custom logic here
    pressed && start < 3 && setStart((prev:any)=> Number((prev+0.1).toFixed(1)));
  }, 100);
  useInterval(()=>{
    !pressed && start > 0 && setStart((prev:any)=>{
      if( Number((prev-0.5).toFixed(1)) < 0){
        return 0;
      }
      return Number((prev-0.5).toFixed(1))
    });
  }, 20);
  function handleModal(){
    modalRef?.current?.open();
  }
  function handleModalClose(){
    modalRef?.current?.close();
  }
  return (
    <div>
      <Modal ref={modalRef}>
        <div style={{width: 300, height: 300, background: 'white'}}>
          <button onClick={handleModalClose}>close</button>
        </div>
      </Modal>
      <Button onClick={handleModal}>OPEN MODAL</Button>
      <span>{props.currentTime}</span><br/>
      <input min={0} max={1} step="any" type="range" value={props.value} onChange={props.handleChange} />
      <div>
        <Button onClick={props.play}>play!</Button>
        <Button onClick={props.pause}>Pause</Button>
        <Button onClick={()=>props.setCurrentTime(props.currentTime-5)}>-5</Button>
        <Button onClick={()=>props.setCurrentTime(props.currentTime+5)}>5</Button>
        <Button onClick={()=>props.setCurrentTime(300)}>go to 5min</Button>
        {/* <Button onClick={()=>props.setValue(0)}>reset</Button> */}
      </div>
      <span>{props.volume}</span><br/>
      <input min={0} max={1} step="any" type="range" value={props.volume} onChange={(e:any)=>{
        const volume = Number(e.target.value).toFixed(2);
        props.setVolume(Number(volume))
      }} />

      <Button
        className="cannon-btn"
        onMouseDown={()=>{
          console.log('mouseDown')
          setShoot(false);
          setPressed(true);
        }}
        onMouseUp={()=>{
          console.log('mouseUp')
          setShoot(true);
          setPressed(false);

        }}
        style={{
          transform: `rotate(-${start*15}deg)`
        }}
      >ggg</Button>
      <span className={`dot ${shoot? '--anim': ''}`} />
      <p>{start}</p>
    </div>
  )
}
export default IndexPage;


function useInterval(callback:any, delay:any) {
  const savedCallback = React.useRef<any>();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
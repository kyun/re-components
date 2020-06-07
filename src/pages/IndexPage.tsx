import React from 'react';
import Countdown from '../components/Countdown';
import './CountdownPage.css';

function NewCountdown({d,h,m,s}:any){
  const [color, setColor] = React.useState('black');

  React.useEffect(()=>{
    if(s<10){
      setColor('red');
    }else{
      setColor('black');
    }
  },[s]);

  return (
    <div className="NewCountdown">
      <div className="box">
        <h1>{d}</h1>
        <p>Day</p>
      </div>
      <div className="box">
        <h1>{h}</h1>
        <p>Hours</p>
      </div>
      <div className="box">
        <h1>{m}</h1>
        <p>Minutes</p>
      </div>
      <div className="box">
        <h1 style={{color: color}}>{s}</h1>
        <p>Seconds</p>
      </div>
    </div>
  )
}
function IndexPage(){
  const [ value, setValue]= React.useState('');
  const cntEl = React.useRef<any>(null);

  function start(){
    if(cntEl.current){
      cntEl.current.start();
    }
  }
  function stop(){
    cntEl?.current?.pause();
  }
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <Countdown value={300} />
        <Countdown value={300} render={({d,h,m,s})=>{
          return <div>
            <span>{d}</span>:
            <span>{h}</span>:
            <span>{m}</span>:
            <span>{s}</span>
          </div>
        }} />
        <Countdown value={400} render={(props)=><NewCountdown {...props} />} />
        <Countdown value={30} autoStart={false} ref={cntEl} />
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </main>
  )
}
export default IndexPage;
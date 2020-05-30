import React from 'react';
import './App.css';
import Countdown from './components/Countdown';

function App() {
  const ref1 = React.useRef<any>(null);
  // React.useEffect(()=>{
  //   console.log(ref1.current);
  //   if(ref1.current){
  //     console.log(ref1.current.getAlert());
  //   }
  // },[]);

  return (
    <div className="App">
      <Countdown ref={ref1} interval={1000} value={300}
        render={ ({d,h,m,s}:any) => (
          <>
            <span>{d}</span>:
            <span>{h}</span>:
            <span>{m}</span>:
            <span>{s}</span>
            <br/>
            <button onClick={()=>{ref1.current.start()}}>start!</button>
            <button onClick={()=>{ref1.current.pause()}}>pause!</button>
          </>
        )}
      />
      <Countdown interval={100}  value={300} autoStart={true}/>
      <Countdown interval={10} value={300} />

      {/* <Countdown interval={1000} value={300} render={ ({d,h,m,s, setPaused}) =>
        (<> 
          <span>{d}</span>:
          <span>{h}</span>:
          <span>{m}</span>:
          <span>{s}</span>
          <br/>
          <button onClick={()=>setPaused(true)}>Pasue!</button>
        </>)
      }/>
      <br/>
      <Countdown interval={1000} value={300} render={({d,h,m,s})=>(
        <> 
          <span>{h}</span>:
          <span>{m}</span>:
          <span>{s}</span>
        </>
      )} />
      <br/>
      <Countdown interval={1000} value={300} render={({d,h,m,s})=>(
        <> 
          <span>{m}</span>:
          <span>{s}</span>
        </>
      )} /> */}


      {/* <Countdown interval={10} value={300} />
      <Countdown value={300} />
      <Countdown value={300} /> */}

    </div>
  );
}

export default App;

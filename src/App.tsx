import React from 'react';
import './App.css';
import Countdown from './components/Countdown';

function App() {

  React.useEffect(()=>{

  },[]);
  function CustomRender({d,h,m,s, completed}:any){
    if(completed){
     return <div style={{background: 'gray', padding: '8px'}}>
        <p>Completed!</p>
      </div>
    }
    return(
      <div style={{background: 'gray', padding: '8px'}}>
        <span>{d}</span>
        <span>{h}</span>
        <span>{m}</span>
        <span style={{color: 'red'}}>{s}</span>
      </div>
    )
  }
  return (
    <div className="App">
      <Countdown value={300} />
      <Countdown value={15} onComplete={()=>{}} render={CustomRender} />

      {/* <Countdown interval={100}  value={300} autoStart={true}/>
      <Countdown interval={10} value={300} /> */}

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

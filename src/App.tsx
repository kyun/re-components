import React from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [v1, setV1] = React.useState<any>("1,23465");
  const btn = React.useRef<HTMLButtonElement>(null);
  React.useEffect(()=>{
    if(btn.current){
      btn.current.focus();
    }
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
  function numberWithCommas(x:any) {
    //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\,/g,''); 
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    //return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  
  }
  
  return (
    <div className="App">
      <Button ref={btn}>Children</Button>
      <Button block>Block Button</Button>
      <br/>
      <Input prefix="pref" suffix="suff"
        addonBefore={<Button>Addon</Button>}
        addonAfter={<Button>Addon</Button>}
      />
      <br/>
      <Input prefix="pref" suffix="suff" disabled />
      <br/>
      <Input type="tel" formatter={numberWithCommas} defaultValue={"1,234"} value={v1} onChange={setV1} prefix="pref" suffix="suff" />

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

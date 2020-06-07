import React from 'react';


type Params = {
  d: string,
  h: string,
  m: string,
  s: string,
  [key: string]: any;
}

interface CountdownProps{

  interval?: 1000 // 10 | 100 | 1000 // milliseconds
  value?: number
  autoStart?: boolean
  render?: ({origin, d,h,m,s, completed, isRunning}:{[key:string]:any}) => React.ReactNode;

  onMount?: ()=>void;
  onUnmount?: ()=>void;

  onStart?: ()=>void;
  onPause?: ({origin, d,h,m,s}:{[key:string]:string})=>void;
  onComplete?: ()=>void;
  onTick?: ({d,h,m,s}:{[key:string]:string}) => void;

  style?: React.CSSProperties;
  className?: string;

}

function Countdown({interval=1000, value=0, autoStart = true, render, onStart, onPause, onTick, onComplete, onMount, onUnmount }:CountdownProps, ref:any ){
  const [count, setCount] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(autoStart);
  const [completed, setCompleted] = React.useState(false);
  React.useImperativeHandle(ref, () => ({
    start() {
      setIsRunning(true);
      onStart?.();
    },
    pause(){
      setIsRunning(false);
      onPause?.(secondsToDay(count-1));
    },
  }));
  useInterval(() => {
    if(isRunning){
      setCount( (prev) => prev-1 );
      onTick?.(secondsToDay(count-1));
    }
    if( (count-1) === 0){
      setCompleted(true);
      onComplete?.();
    }
  }, count > 0 ? interval : null , isRunning);

  
  React.useEffect(()=>{
    const ms = 1000 / interval;
    setCount(value * ms);
  }, [setCount, interval, value]);

  React.useEffect(()=>{
    //ComponentDidMount
    onMount?.();
    return () => {
      //ComponentWillUnmount
      onUnmount?.();
    }
  }, [onMount, onUnmount]);
  return (
  <>
    {
    render?.({...secondsToDay(count), origin: count, completed, isRunning}) || <div>{count}</div>
  }
  </>
  )
}
export default React.forwardRef(Countdown);


function secondsToDay(seconds:number){
  let d = (~~(seconds / (60 * 60 * 24))).toString().padStart(2, '0');
  let h = (~~(seconds % (60 * 60 *24) /(60 * 60))).toString().padStart(2, '0');
  let m = (~~((seconds % (60 * 60 *24) % (60 * 60)) / 60)).toString().padStart(2, '0');
  let s = (~~(seconds % 60)).toString().padStart(2, '0');
  return { d, h, m, s };
}
function useInterval(callback: any, delay: any, isRunnning: boolean) {
  const savedCallback: any = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (isRunnning && delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, isRunnning]);
};
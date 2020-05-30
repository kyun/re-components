import React from 'react';

interface CountdownProps{
  ref?: any;
  props: {
    interval?: 10 | 100 | 1000 // milliseconds
    value?: number
    autoStart?: boolean
    intervalDelay?: number;
    render?: ({d,h,m,s}:{[key:string]:any}) => any;
    onMount?: ()=>void;
    onUnmount?: ()=>void;
    onStart?: ()=>void;
    onTick?: ({d,h,m,s}:{[key:string]:any}) => void;
    onFinish?: ()=>void;
    style?: React.CSSProperties;
    className?: string;
  }

}
function Countdown({interval=1000, value=0, autoStart = false, render, onStart, onTick, onFinish, onUnmount }:any, ref:any ){
  const [count, setCount] = React.useState(0);
  const [start, setStart] = React.useState(autoStart);
  React.useImperativeHandle(ref, () => ({
    start() {
      setStart(true);
    },
    pause(){
      setStart(false);
    }
  }));
  useInterval(() => {
    if(start){
      setCount((prev)=>prev-1);
      onTick?.(secToDay(count-1));
    }
    if( (count-1) === 0){
      onFinish?.();
    }
  }, count > 0 ? interval : null);

  
  React.useEffect(()=>{
    //ComponentDidMount
    const ms = 1000 / interval;
    setCount(value * ms);
    return () => {
      //ComponentWillUnmount
      onUnmount?.();
    }
  }, []);
  return (
  <>
    {
    render?.({...secToDay(count)}) ||
     <div>
      {count}
    </div>
  }
  </>
  )
}
export default React.forwardRef(Countdown);


function secToDay(seconds:number){
  let d = (~~(seconds/(3600*24))).toString().padStart(2,'0');
  let h = (~~(seconds % (3600*24) /3600)).toString().padStart(2,'0');
  let m = (~~((seconds % (3600*24) % 3600) / 60)).toString().padStart(2,'0');
  let s = (~~(seconds % 60)).toString().padStart(2,'0');
  return {d,h,m,s};
}
function useInterval(callback: any, delay: any) {
  const savedCallback: any = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
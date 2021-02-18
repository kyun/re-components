import React, {useState, useEffect, useImperativeHandle, forwardRef, Ref, MutableRefObject} from "react";

export interface StopwatchRef {
  start: () => void;
  pause: () => void;
  record: () => void;
  reset: () => void;
}

export interface Timer {
  origin?: number,
  d: string;
  h: string;
  m: string;
  s: string;
}

type Records = Timer[];

interface StopwatchProps {
  onMount?: () => void;
  onUnMount?: () => void;
  onStart?: () => void;
  onPause?: (timer: number) => void;
  onResume?: () => void;
  onRecord?: (timer: number) => void;
  onReset?: () => void;
  render?: ({ origin, d, h, m, s }: Timer, records: Records) => React.ReactNode;
}

function Stopwatch ({
  onMount,
  onUnMount,
  onStart,
  onPause,
  onResume,
  onReset,
  onRecord,
  render,
}: StopwatchProps, ref: Ref<StopwatchRef>) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState<Records>([]);

  useImperativeHandle(ref, () => ({
    start() {
      setIsRunning(true);
      const isResume = timer !== 0;
      if (isResume) {
        onResume?.();
        return;
      }
      onStart?.();
    },

    pause() {
      onPause?.(timer);
      setIsRunning(false);
    },

    record() {
      onRecord?.(timer);
      setRecords((records: Records) => {
        return [...records, secToDay(timer)];
      });
    },

    reset() {
      onReset?.();
      setIsRunning(false);
      setTimer(0);
      setRecords([]);
    },
  }));


  useEffect(() => {
    onMount?.();
    return () => {
      onUnMount?.();
    }
  }, []);

  useInterval(
    () => {
      setTimer(timer + 1);
    },
    1000,
    isRunning
  );

  return <>{render?.(secToDay(timer), records) || <div>{ timer }</div>}</>;
};

export default forwardRef(Stopwatch);

function useInterval(callback: Function, delay: number, isRunning:boolean) {
  const savedCallback: React.MutableRefObject<Function | undefined> = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function tick() {
      savedCallback?.current?.();
    }
    if (isRunning && delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, isRunning]);
}

function secToDay(seconds: number) {
  let d = (~~(seconds / (3600 * 24))).toString().padStart(2, "0");
  let h = (~~((seconds % (3600 * 24)) / 3600)).toString().padStart(2, "0");
  let m = (~~(((seconds % (3600 * 24)) % 3600) / 60))
      .toString()
      .padStart(2, "0");
  let s = (~~(seconds % 60)).toString().padStart(2, "0");
  return { origin: seconds, d, h, m, s };
}



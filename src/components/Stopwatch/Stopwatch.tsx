import React, { useState, useEffect, useImperativeHandle, forwardRef, Ref } from "react";
import { secToDay, useInterval } from "../utils";

export interface StopwatchRef {
  start: () => void;
  pause: () => void;
  record: () => void;
  reset: () => void;
}

export interface Timer {
  d: string;
  h: string;
  m: string;
  s: string;
}

interface StopwatchProps {
  onMount?: () => void;
  onStart?: () => void;
  onPause?: (timer: number) => void;
  onResume?: () => void;
  onRecord?: (timer: any) => void;
  onReset?: () => void;
  render?: ({ d, h, m, s }: Timer, records: any) => any;
}

type Records = Timer[];

const Stopwatch = ({
  onMount,
  onStart,
  onPause,
  onResume,
  onReset,
  onRecord,
  render,
}: StopwatchProps, ref: Ref<StopwatchRef>) => {
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
  }, []);

  useInterval(
    () => {
      setTimer(timer + 1);
    },
    1000,
    isRunning
  );

  return <>{render?.(secToDay(timer), records)}</>;
};

export default forwardRef(Stopwatch);

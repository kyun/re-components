# &lt;Countdown /&gt;
A reusable countdown component for React.

## Contents

- [Features](#features)
- [Examples](#examples)
- [Props](#props)

### Features

- [ ] milliseconds..


### Examples
[Live Demo](https://codesandbox.io/s/silly-voice-d2efo)

#### Basic Usage
A simple example of how to set up a countdown which counts down from 15 seconds.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './components/Countdown;

ReactDOM.render(
  <Countdown value={15} />,
  document.getElementById('root')
);
```


### Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:-----------|
|interval|1000|1000|현재 밀리세컨드 미지원|
|value|`number`|`0`|시작 초|
|autoStart|`boolean`|`true`|Mount 이후 자동 시작|
|render|`()=>ReactNode`|`undefined`|for Custom render|
|onMount|`()=>void`|`undefined`|Mount시 이벤트 처리|
|onUnmount|`()=>void`|`undefined`|Unmount시 이벤트 처리|
|onStart|`()=>void`|`undefined`|카운트 다운 Start시 이벤트 처리|
|onPause|`({origin,d,h,m,s})=>void`|`undefined`|카운트 다운 Pause시 이벤트 처리|
|onComplete|`()=>void`|`undefined`|카운트 다운 완료시 이벤트 처리|
|onTick|`({origin,d,h,m,s})=>void`|`undefined`|매 `interval`마다 이벤트 처리|

# &lt;AudioPlayer /&gt;
A reusable audio player component for React.

## Contents

- [Features](#features)
- [Examples](#examples)
- [Props](#props)

### Features

- [ ] milliseconds..


### Examples
~~Live Demo~~

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

|autoPlay|`boolean`|`true`|Mount 이후 자동 시작|
|render|`()=>ReactNode`|`undefined`|for Custom render|
|onMount|`()=>void`|`undefined`|Mount시 이벤트 처리|
|onPlay|`()=>void`|`undefined`|Play|
|onPause|`()=>void`|`undefined`|Pause|
|onListen|`()=>void`|`undefined`|Listen|
|onSeeked|`()=>void`|`undefined`|Seeked|
|onEnded|`()=>void`|`undefined`|Ended|
|onCanPlay|`()=>void`|`undefined`|CanPlay|
|onLoadedMeta|`()=>void`|`undefined`|LoadedMeta|
|onLoaded|`()=>void`|`undefined`|Loaded|


# React &lt;Input /&gt;
A reusable input component for React.

### Basic Usage
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
[Live Demo](https://codesandbox.io/s/cool-fermat-uk0dq)

### Custom & Conditional Rendering
In case you want to change the output of the component, you can do this by using a custome [`render`](#render).

#### Custom render with onComplete

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './components/Countdown;

function CustomRender({d,h,m,s}){
  return(
    <div style={{background: 'gray', padding: '8px'}}>
      <span>{d}</span>
      <span>{h}</span>
      <span>{m}</span>
      <span style={{color: 'red'}}>{s}</span>
    </div>
  )
}
ReactDOM.render(
  <Countdown value={15} render={CustomRender} />,
  document.getElementById('root')
);
```
[Live Demo](https://codesandbox.io/s/cool-fermat-uk0dq)

# React &lt;Button /&gt;
A reusable button component for React.

## Contents

- [Features](#features)
- [Basic Usage](#basic-usage)
- [Custom Usage](#custom-usage)
- [Props](#props)


### Features

- [] ...


### Basic Usage
A simple example of a Button named `Sample Button`.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button;

ReactDOM.render(
  <Button>Sample Button</Button>,
  document.getElementById('root')
);
```
[Live Demo](https://codesandbox.io/s/cool-fermat-uk0dq)

### Custom Usage
In case you want to change the style of the component, or you want to add `onClick` event or something, you can do this by using [`props`](#props).


import ReactDOM from 'react-dom';
import Button from './components/Button;

const customStyle={
  background: '#1a73e8',
  padding: '4px 8px',
  border: '0',
  color: 'white'
}
function onClick(){
  console.log('Click!');  
}

ReactDOM.render(
  <Button style={customStyle} onClick={onClick} >Custom Button</Button>,
  document.getElementById('root')
);
```
[Live Demo](https://codesandbox.io/s/cool-fermat-uk0dq)


#### Using Ref
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button;

function App(){
  const btnEl = React.useRef(null);

  React.useEffect(()=>{
    if(btnEl.current){
      btnEl.current.focus();
    }
  },[]);
  return (<Button ref={btnEl}>Focus Me!</Button>);
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

### Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:-----------|
|[**key**](#key)|<code>string&#124;number</code>|`undefined`|React  [**key**](https://reactjs.org/docs/lists-and-keys.html#keys); can be used to restart the countdown|

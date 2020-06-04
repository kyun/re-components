# &lt;Input /&gt;
A reusable input component for React.

## Contents

- [Features](#features)
- [Examples](#examples)
- [Props](#props)

### Features

- [x] `inputMode` 설정
- [ ] `<Input.Password>`
- [ ] `<Input.Textarea>`
- [ ] `clear()`
- [ ] `hide()`
- [ ] `validator`


### Examples

#### Basic Usage
A simple example of a Input with `prefix` and `suffix`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';

ReactDOM.render(
  <Input prefix={`prefix`} suffix={`suffix`} />,
  document.getElementById('root')
);
```

A simple example of a Input with `addonBefore` and `addonAfter`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Inpu';
import Button from './components/Button';

ReactDOM.render(
  <Input addonBefore={<Button>-</Button>} addonAfter={<Button>+</Button>} />,
  document.getElementById('root')
);
```

### Props
|Name|Type|Default|Description|
|:--|:--:|:-----:|:-----------|
|key|<code>string&#124;number</code>|`undefined`|React  [**key**](https://reactjs.org/docs/lists-and-keys.html#keys); can be used to restart the countdown|
|placeholder|<code>string&#124;number</code>|`null`|hint|
|prefix|`React.ReactNode`|`undefined`|prefix|
|suffix|`React.ReactNode`|`undefined`|suffix|
|style|`React.CSSProperties`|`undefined`|CSS Style|
|wrapperStyle|`React.CSSProperties`|`undefined`|CSS Style|
|disabled|`boolean`|`false`|make it disabled|
|type|`string`|`text`|input type|
|inputMode|`string`|`text`|mobile keyboard|
|value|`number|string`|`undefined`|value|
|defaultValue|`number|string`|`undefined`|default Value|
|onChange|`()=>void`|`undefined`|onchange|
|onPressEnter|`()=>void`|`undefined`|onPressEnter|

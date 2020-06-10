import React from 'react';
import './InputPIN.css';
import InputPIN from '../components/InputPIN';
import Input from '../components/Input';

function IndexPage(){
  const [value, setValue] = React.useState('');
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <InputPIN className="PIN1" value={value} onChange={setValue}  />
        <Input />
      </div>
    </main>
  )
}
export default IndexPage;
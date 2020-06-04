import React from 'react';
import InputPIN from '../components/InputPIN';

function IndexPage(){
  const [ value, setValue]= React.useState('');
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <InputPIN value={value} onChange={setValue} />
      </div>
    </main>
  )
}
export default IndexPage;
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';


function IndexPage(){

  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      IndexPage
      <Input />
      <br/>
      <Input prefix={`prefix`} suffix={`suffix`} />
      <br />
      <Input addonBefore={<Button>-</Button>} addonAfter={<Button>+</Button>} />
      <br/>
      <Input prefix='nickname' addonAfter={<Button>Check availability</Button>} />
      <br/>
      <Input prefix={<span style={{color: 'orange'}}>Email</span>} suffix={<Button>Check</Button>} 
            style={{textAlign: 'center', color: 'red', fontSize: 20, padding: 8, borderRadius: 3}} />
      <br/>
      <Input prefix={<span style={{color: 'orange'}}>Email</span>} addonAfter={<Button style={{ }}>Check</Button>} 
            style={{textAlign: 'center', color: 'red', fontSize: 20, padding: 8, borderRadius: 3}} />
    </main>
  )
}
export default IndexPage;
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Countdown from '../components/Countdown';


function IndexPage(){

  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      IndexPage
      <Countdown value={30} />
      <Input.Password />
    </main>
  )
}
export default IndexPage;
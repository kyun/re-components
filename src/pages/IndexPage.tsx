import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaUserAlt } from 'react-icons/fa';



function Prefixed(){
  return (
    <FaUserAlt style={{ color: '#02adef', fontSize: 14, marginRight: 8}} />

  )
}
function AddonAfter(){
  return (
    <Button style={{fontSize: 20, padding: 8}}>
      Submit
    </Button>
  )
}
function IndexPage(){

  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <Input prefix={<Prefixed />} addonAfter={<AddonAfter />} style={{ padding: 8, borderRadius: 5,fontSize: 20, alignItems: 'center' }}/>
      <Input inputMode="numeric" prefix={<Prefixed />} addonAfter={<AddonAfter />} style={{ padding: 8, border: '2px solid #02aDEF', borderRadius: 5,fontSize: 20, alignItems: 'center' }}/>

    </main>
  )
}
export default IndexPage;
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaUserAlt } from 'react-icons/fa';
import './InputPage.css';


function Prefixed(){
  return (
    <FaUserAlt style={{ color: '#02adef', fontSize: 14, marginRight: 8}} />

  )
}
function AddonAfter(){
  return (
    <Button className="addon-after">
      Submit
    </Button>
  )
}

function AddonBefore(){
  return(
    <div className="addon-before">
      <span>http://</span>
    </div>
  )
}
function IndexPage(){
  return (
    <main style={{maxWidth: 768, margin: 'auto'}}>
      <div style={{padding: 8, border: '1px solid gray'}}>
        <p>Basic Usage</p>
        <Input className="basic-input" placeholder="Basic usage" />
        <p>Using Addon</p>
        <Input
          addonBefore={<AddonBefore />}
          addonAfter={<AddonAfter />}
          style={{padding: '6px 4px', border: '1px solid #bebebe', fontSize: '11pt'}}
          placeholder="mysite" />

      </div>
      <Input maxLength={4} prefix={<Prefixed />} addonAfter={<AddonAfter />} style={{ padding: 8, borderRadius: 5,fontSize: 20, alignItems: 'center' }}/>
    </main>
  )
}
export default IndexPage;
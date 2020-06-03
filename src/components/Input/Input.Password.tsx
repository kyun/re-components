import React from 'react';
import { InputProps } from './Input';

function Password(props:InputProps, ref:any){
  return(
    <>
      <input type="password" />
    </>
  )
}
export default React.forwardRef(Password);


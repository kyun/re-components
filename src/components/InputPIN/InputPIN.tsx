import React from 'react';

interface InputPINProps{
  length?: number;

  [key: string]: any;  
}
function InputPIN({length = 4}:InputPINProps){
  const inputRefs:any = React.useMemo(()=> Array(length).fill(0).map(i => React.createRef()), [length]);

  const Inputs = React.useMemo(()=>{
    return (
      new Array(length).fill(0).map((i,index)=>(
        <input key={index} ref={inputRefs[index]} />
      ))
    )
  },[inputRefs, length]);

  return (
    <label>
      {
        Inputs  
      }
    </label>
  )
}
export default InputPIN;
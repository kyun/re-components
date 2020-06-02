import React from 'react';

interface InputPINProps{
  length?: number;

  [key: string]: any;  
}
function InputPIN({length = 4}:InputPINProps){
  const PINRefs = React.useMemo(()=> Array(length).fill(0).map(i => React.createRef()), [length]);

  return (
    <div>
      Input PIN
    </div>
  )
}
export default InputPIN;
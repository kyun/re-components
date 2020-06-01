import React, { EventHandler } from 'react';
import './Input.css';
interface InputProps{
  id?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  formatter?: any;
  type?: "text" | "number" | "email" | "password" | "tel";
  inputMode?: "text" | "numeric";
  value?: number|string|any;
  defaultValue?: number | string;
  onChange?: (e:any) => void;
  onPressEnter?: () => void;
  [key: string]: any;
}


function Input({type="text",inputMode="text",value,defaultValue,addonBefore,addonAfter,prefix,suffix,disabled,onChange,formatter,...props}:InputProps, ref:any){
  function handleChange(e:React.ChangeEvent<any>){
    console.log(e.target.value);
    let newValue:any = '';
    if(formatter){
      newValue = formatter(e.target.value);
    }
    onChange?.(newValue);
  }
  return(
    <>
    {addonBefore}
    <label style={{border: '1px solid gray'}}>
      {prefix}
      <input inputMode={inputMode} ref={ref} defaultValue={defaultValue} value={value} type={type} style={{border: '0'}} onChange={handleChange} disabled={disabled}/>
      {suffix}
    </label>
    {addonAfter}
    </>
  )
}

export default React.forwardRef(Input);
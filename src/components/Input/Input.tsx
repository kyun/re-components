import React from 'react';
import './Input.css';
import Password from './Input.Password';

interface CompoundedComponent extends React.ForwardRefExoticComponent<any>{
  Password: React.FC<InputProps>;
}


export interface InputProps{
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
  type?: "text" | "number" | "email" | "tel";
  inputMode?: "text" | "numeric";
  value?: number|string|any;
  defaultValue?: number | string;
  onChange?: (e:any) => void;
  onPressEnter?: () => void;
  [key: string]: any;
}


function Input({type="text", inputMode="text",value, style, defaultValue, placeholder, addonBefore,addonAfter,prefix,suffix,disabled,onChange,formatter}:InputProps, ref:any){
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
    <label style={{border: '1px solid gray', ...style}}>
      {prefix}
      <input inputMode={inputMode} ref={ref} defaultValue={defaultValue} value={value} placeholder={placeholder} type={type} style={{border: '0'}} onChange={handleChange} disabled={disabled}/>
      {suffix}
    </label>
    {addonAfter}
    </>
  )
}

Input.Password = Password;
export default React.forwardRef(Input) as CompoundedComponent
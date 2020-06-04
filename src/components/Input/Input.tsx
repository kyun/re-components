import React from 'react';
import './Input.css';
import Password from './Input.Password';

interface CompoundedComponent extends React.ForwardRefExoticComponent<any>{
  Password: React.FC<InputProps>;
}


export interface InputProps{
  id?: string;
  placeholder?: string;
  wrapperStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  disabled?: boolean;
  maxLength?: number;
  type?: "text" | "number" | "email" | "tel";
  inputMode?: "text" | "numeric";
  value?: number|string;
  defaultValue?: number | string;
  onChange?: (e:any) => void;
  onPressEnter?: () => void;
  [key: string]: any;
}


function Input({type="text", id,className, inputMode="text",value, style,wrapperStyle, defaultValue, placeholder, addonBefore,addonAfter,prefix,suffix,disabled,onChange,onPressEnter,maxLength}:InputProps, ref:any){
  function handleChange(e:React.ChangeEvent<any>){
    onChange?.(e.target.value);
  }
  function handleKeyDown(e:React.KeyboardEvent){
    if(e.key === 'Enter'){
      onPressEnter?.();
    }
  }
  return(
    <div className="___Input-wrapper" style={{...wrapperStyle}}>
    {addonBefore}
    <label className={className} htmlFor={id} style={{ ...style}}>
      {prefix}
      <input id={id} inputMode={inputMode} ref={ref} maxLength={maxLength}
            defaultValue={defaultValue} value={value} 
            placeholder={placeholder} type={type} style={{border: '0', padding:0, width: 'inherit', boxSizing: 'border-box'}} 
            onKeyDown={handleKeyDown} onChange={handleChange} 
            disabled={disabled}/>
      {suffix}
    </label>
    {addonAfter}
    </div>
  )
}

Input.Password = Password;
export default React.forwardRef(Input) as CompoundedComponent
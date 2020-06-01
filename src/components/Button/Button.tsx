import React from 'react';

interface ButtonProps{
  children?:React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function Button({disabled, onClick, className, style, children}:ButtonProps, ref:any){
  const styles={
    ...style,
  }
  return (
    <button ref={ref} disabled={disabled} onClick={onClick} className={className} style={styles}>
      {children}
    </button>

  )
}

export default React.forwardRef(Button);
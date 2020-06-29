import React from 'react';

interface ButtonProps{
  children?:React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function Button({disabled, onClick,onMouseUp,onMouseDown, className, style, children}:ButtonProps, ref:any){
  const styles={
    ...style,
  }
  return (
    <button ref={ref} disabled={disabled} onClick={onClick} className={className} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={styles}>
      {children}
    </button>

  )
}

export default React.forwardRef(Button);
import React from 'react';
import './Modal.scss';
import Portal from './Portal';


function Modal({children}:any, ref:any){
  const [isVisible, toggle] = React.useState(true); 
  React.useImperativeHandle(ref,()=>({
    open(){
      toggle(true);
    },
    close(){
      toggle(false);
    }
  }));

  React.useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  return (
    <>

    { isVisible && 
      <Portal id="Modal-id">
        <div className="Modal">
          <div className="overlay" onClick={()=>toggle(false)} />
          <div className="content">
            {children}
          </div>
        </div>
      </Portal>
    }

    </>

  )
}

export default React.forwardRef(Modal);
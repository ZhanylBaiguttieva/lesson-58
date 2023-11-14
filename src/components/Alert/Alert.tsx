import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  onDismiss ? : React.MouseEventHandler;
}
const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  let buttonAlert = (
    <div className={type} role="alert" id="show-alert" style={{display: "block"}} >
      {children}
    <button className="btn btn-transparent border-0 float-end" onClick={onDismiss}>X</button>
    </div>
  );

  if(onDismiss === undefined) {
    buttonAlert = (
      <>
        <div className={type} role="alert">
          {children}
        </div>
      </>
    );
  }
  return (
    <>
      {buttonAlert}
    </>
  );
};

export default Alert;
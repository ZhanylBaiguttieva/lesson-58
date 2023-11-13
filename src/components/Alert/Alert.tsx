// let cart = (
//   <div className="alert alert-primary">
//     Cart is empty!Add something!
//   </div>
// );

import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  onDismiss ? : () => void;
}
const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  let buttonAlert = (
    <div className={type} role="alert">
      This is a warning type alert!
    <button className="btn btn-transparent border-0 float-end">X</button>
    </div>
  );

  if(onDismiss === undefined) {
    buttonAlert = (
      <>
        <div className={type} role="alert">
          This is a warning type alert!
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
// let cart = (
//   <div className="alert alert-primary">
//     Cart is empty!Add something!
//   </div>
// );

import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  onDismiss: () => void;
}
const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  return (
    <div className={type} role="alert">
      This is a warning type alert!
      <button onClick={onDismiss}>Close</button>
      {children}
    </div>
  );
};

export default Alert;
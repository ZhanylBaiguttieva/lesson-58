import React from 'react';
import Backdrop from '../Backdrop/Backdrop';


interface Props extends React.PropsWithChildren  {
  show: boolean;
  mainTitle: string;
  onClose: React.MouseEventHandler;
}
const Modal:React.FC<Props> = ({show, mainTitle, onClose, children }) => {

  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show ? 'block': 'none'}} onClick={onClose}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{mainTitle}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
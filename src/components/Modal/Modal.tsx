import React from 'react';
import Backdrop from '../Backdrop/Backdrop';


interface Props extends React.PropsWithChildren  {
  show: boolean;
  mainTitle: string;
  onClose: React.MouseEventHandler;
}
const Modal:React.FC<Props> = ({show, mainTitle, onClose,children }) => {

  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? 'block': 'none'}} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{mainTitle}</h1>
              <button type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={onClose}/>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
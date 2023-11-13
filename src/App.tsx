
import './App.css';
import Modal from './components/Modal/Modal';
import {useState} from 'react';
import Alert from './components/Alert/Alert';


function App() {
  const [showModal, setShowModal] = useState(false);

  const closeAlert = () => {

  };


  return (
    <>
      <div>
        <Modal show={showModal} mainTitle="Some kinda modal title" onClose={() => setShowModal(false)}>
        <p className="modal-body">
          This is modal content
        </p>
        </Modal>
        <button className="w-100 btn btn-light" onClick={() => setShowModal(true)}>Demonstrate</button>
      </div>
      <div className="alert alert-primary mt-3">
        <Alert type="warning" onDismiss={closeAlert}/>
      </div>
      <div className="alert alert-danger">
        <Alert type="primary"/>
      </div>

    </>
  );
}

export default App;

import {useState} from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const closeAlert = () => {
    const  div  = document.getElementById('show-alert');
    if(div !== null) {
      if(div.style.display === 'block') {
          div.style.display = 'none';
      }
    }
    return false;
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
      <div className="container mt-3">
        <Alert type="alert alert-warning" onDismiss={closeAlert} children={'This is warning alert'} />
        <Alert type="alert alert-primary" children={'This is primary alert'} />
      </div>
    </>
  );
}

export default App;

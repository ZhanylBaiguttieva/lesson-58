
import './App.css';
import Modal from './components/Modal/Modal';
import {useState} from 'react';


function App() {
  const [showModal, setShowModal] = useState(false);

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
    </>
  );
}

export default App;

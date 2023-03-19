import { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';
import Modal from './Modal';
import ProjectForm from './ProjectForm';

const AddNewproject = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleSubmit = e => {
    // handle form submission logic here
  };

  return (
    <div className='AddNewProject'>
      <div className='add-button'>
        <span onClick={() => setShowModal(true)}>
          <Plus size='20' />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          value={projectName}
          heading='New project'
          setvalue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText='+ Add '
        />
      </Modal>
    </div>
  );
};

export default AddNewproject;

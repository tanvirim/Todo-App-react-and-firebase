import { useState } from 'react';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import Modal from './Modal';
import RenameProject from './RenameProject';

const Project = ({ project, edit }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='project'>
      <div className='name'>{project.name}</div>
      <div className='btns'>
        {edit ? (
          <div className='edit-delete'>
            <span
              className='edit'
              onClick={() => {
                setShowModal(true);
                console.log(project);
              }}
            >
              <Pencil size='14' />
            </span>
            <span className='delete'>
              <XCircle size='14' />
            </span>
          </div>
        ) : project.numOfTodos === 0 ? (
          ''
        ) : (
          <div className='total-todos'>{project.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Project;

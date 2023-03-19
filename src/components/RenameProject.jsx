import { useState } from 'react';
import ProjectForm from './ProjectForm';
const RenameProject = ({ project, setShowModal }) => {
  const [newProjectName, setNewProjectName] = useState(project.name);

  const handleSubmit = e => {
    e.preventDefault();
    setNewProjectName(e.target.value);
    setShowModal(false);
  };

  return (
    <div className='RenameProject'>
      <ProjectForm
        value={newProjectName}
        handleSubmit={handleSubmit}
        heading='Edit project name'
        setvalue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText='confirm'
      />
    </div>
  );
};

export default RenameProject;

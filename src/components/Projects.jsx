import { useState } from 'react';
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons';
import AddNewproject from './AddNewproject';
import Project from './project';
import RenameProject from './RenameProject';
const Projects = () => {
  const [showMenu, setshowMenu] = useState(true);
  const [edit, setedit] = useState();
  const pencilColor = edit ? 'green' : 'black';
  const projects = [
    {
      id: 1,
      name: 'work',
      numOfTodos: 2
    },
    {
      id: 2,
      name: 'personal',
      numOfTodos: 3
    },
    {
      id: 3,
      name: 'others',
      numOfTodos: 5
    }
  ];

  return (
    <div className='projects'>
      <div className='header'>
        <div className='title'>
          <Palette />
          <p>Projects</p>
        </div>
        <div className='btns'>
          {showMenu && projects.length > 0 && (
            <span
              className='edit'
              onClick={() => {
                setedit(edit => !edit);
                console.log(edit);
              }}
            >
              <PencilFill size='15' color={pencilColor} />
            </span>
          )}
          <AddNewproject />
          <span className='arrow'>
            <CaretUp size='20' />
          </span>
        </div>
      </div>

      <div className='items'>
        {projects.map(project => (
          <Project project={project} key={project.id} edit={edit} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

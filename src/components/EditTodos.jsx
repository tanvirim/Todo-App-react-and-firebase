import TodoForm from './TodoForm';
import { useState } from 'react';

const EditTodos = () => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState();
  const handleSubmit = e => {};
  const projects = [
    {
      id: '1',
      name: 'work',
      numOfTodos: '3'
    },
    { id: '2', name: 'personal', numOfTodos: '4' }
  ];

  return (
    <div className='EditTodos'>
      <div className='header'>Edit Todos</div>
      <div className='container'>
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
        />
      </div>
    </div>
  );
};

export default EditTodos;

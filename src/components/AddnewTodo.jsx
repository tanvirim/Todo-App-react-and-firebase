import { useState } from 'react';
import Modal from './Modal';
import TodoForm from './TodoForm';
const AddnewTodo = () => {
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
    <div className='AddNewTodo'>
      <button
        className='btn'
        onClick={() => {
          setShowModal(true);
        }}
      >
        + New Todo
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading='Add a new To-do'
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
};

export default AddnewTodo;

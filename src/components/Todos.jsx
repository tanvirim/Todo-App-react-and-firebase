import Todo from './Todo';
import NextSevenDaysTodo from './NextSevenDaysTodo';
import { useContext } from 'react';
import { TodoContext } from '../context';
const Todos = () => {
  const { selectedProject } = useContext(TodoContext);
  const todos = [
    {
      id: 1,
      text: 'Finish homework',
      time: '5:00 PM',
      date: '2023-03-20',
      day: 'Sunday',
      checked: true,
      color: 'blue',
      project: 'School'
    },
    {
      id: 2,
      text: 'Buy groceries',
      time: '10:00 AM',
      date: '2023-03-22',
      day: 'Tuesday',
      checked: false,
      color: 'green',
      project: 'Personal'
    }
  ];

  return (
    <div className='Todos'>
      <div className='selected-project'>{selectedProject}</div>

      <div className='todos'>
        {selectedProject === 'next 7 days' ? (
          <NextSevenDaysTodo todos={todos} />
        ) : (
          todos.map(todo => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  );
};

export default Todos;

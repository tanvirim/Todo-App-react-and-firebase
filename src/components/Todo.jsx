import { useState } from 'react';
import {
  ArrowClockwise,
  CheckCircleFill,
  Circle,
  Trash
} from 'react-bootstrap-icons';

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className='Todo'>
      <div
        className='todo-container'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='check-todo'>
          {todo.checked ? (
            <span className='checked'>
              <CheckCircleFill color='#bebebe' />
            </span>
          ) : (
            <span className='unchecked'>
              <Circle color={todo.color} />
            </span>
          )}
        </div>
        <div className='text'>
          <p style={{ color: todo.checked ? 'grey' : 'black' }}>{todo.text}</p>
          <span className='time'>
            {todo.time} - {todo.project}
          </span>
          <div className={`${todo.checked ? 'line-through' : 'line'}`}> </div>
        </div>
        <div className='next-day-trash'>
          <div className='add-to-nextday'>
            {todo.checked && (
              <span>
                <ArrowClockwise />
              </span>
            )}
          </div>

          <div className='delete-todo'>
            {(hover || todo.checked) && (
              <span>
                <Trash />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

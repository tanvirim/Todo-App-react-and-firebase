import AddnewTodo from './components/AddnewTodo';
import Calendar from './components/Calendar';
import EditTodo from './components/EditTodos';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import User from './components/User';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Sidebar>
        <User />
        <AddnewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import {
  DatePicker,
  TimePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const AddnewTodo = () => {
  const [text, settext] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [day, setday] = useState(null);
  const [time, settime] = useState();

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form action=''>
            <div className='text'>
              <h1>Add New Todo</h1>
              <input
                type='text'
                value={text}
                onChange={e => {
                  settext(e.target.value);
                }}
                placeholder='Todo....'
                autoFocus
              />
            </div>
            <div className='remind'>
              <Bell />
              <p>Remind me</p>
            </div>
            <div className='pick-day'>
              <div className='title'>
                <CalendarDay />
                <p>pick a day</p>
              </div>
              <DatePicker
                label='Select Date'
                value={day}
                onChange={day => {
                  setday(day);
                }}
              />
            </div>

            <div className='pick-time'>
              <div className='title'>
                <Clock />
                <p>pick a time</p>
              </div>
              <TimePicker
                value={time}
                defaultValue={dayjs()}
                onChange={time => {
                  settime(time);
                }}
              />
            </div>

            <div className='project'>
              <div className='title'>
                <Palette />
                <p>pick a project</p>
              </div>
            </div>

            <div className='projects'>
              <div className='project active'>personal</div>
              <div className='project'>work</div>
              <div className='project'>home</div>
            </div>
            <div
              className='cancel'
              onClick={() => {
                setShowModal(false);
              }}
            >
              <X size='40' />
            </div>
            <div className='confirm'>
              <button>+ Add New Todo</button>
            </div>
          </form>
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default AddnewTodo;

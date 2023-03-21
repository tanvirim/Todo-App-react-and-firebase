import { useState } from 'react';

import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import {
  DatePicker,
  TimePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const TodoForm = ({
  handleSubmit,
  heading = false,
  day,
  setDay,
  text,
  setText,
  time,
  setTime,
  projects,
  showButtons = false,
  setShowModal = false
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <div className='text'>
          {heading && <h1>{heading}</h1>}
          <input
            type='text'
            value={text}
            onChange={e => {
              setText(e.target.value);
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
              setDay(day);
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
              setTime(time);
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
          {projects.map(project => (
            <div className='project'>{project.name}</div>
          ))}
        </div>

        {showButtons && (
          <div>
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
          </div>
        )}
      </form>
    </LocalizationProvider>
  );
};

export default TodoForm;

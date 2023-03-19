const ProjectForm = ({
  handleSubmit,
  heading,
  value,
  setvalue,
  setShowModal,
  confirmButtonText
}) => {
  return (
    <form action='' onSubmit={handleSubmit} className='ProjectForm'>
      <h4>{heading}</h4>
      <input
        value={value}
        onChange={e => setvalue(e.target.value)}
        type='text'
        placeholder='project name...'
        autoFocus
      />

      <button className='cancel' onClick={() => setShowModal(false)}>
        cancel
      </button>

      <button type='submit' className='confirm'>
        {confirmButtonText}
      </button>
    </form>
  );
};

export default ProjectForm;

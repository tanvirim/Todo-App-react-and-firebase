import { useRef } from 'react';

const Modal = ({ children, setShowModal, ShowModal }) => {
  const modalRef = useRef();
  const closeModal = e => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  console.log('Modal props:', { ShowModal, setShowModal });
  return (
    ShowModal && (
      <div className='Modal' onClick={closeModal} ref={modalRef}>
        <div className='container'>{children}</div>
      </div>
    )
  );
};

export default Modal;

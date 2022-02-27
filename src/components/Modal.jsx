import React from 'react';
import '../scss/Modal.scss';

const Modal = ({ clickedClose }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <h3
          style={{
            textAlign: 'center',
            margin: '0 auto',
            borderBottom: '1px solid #ccc',
            width: '200px',
            fontSize: '25px',
          }}>
          Modal
        </h3>
        <p style = {{textAlign: 'center',}}>
          Hey! Hope you're having a great day! 
        </p>
        <button className="modal__button" onClick={clickedClose}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Modal;

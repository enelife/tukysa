import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ajusta el elemento de la aplicación para manejar la accesibilidad

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
     
    >
    
      {children}
    </Modal>
  );
};

export default CustomModal;
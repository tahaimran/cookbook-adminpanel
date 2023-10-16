import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ConfirmationDialog({ isOpen, onClose, onConfirm, message }) {
  return (
    <div className="ConfirmationDialog">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Confirmation"
      >
        <h2>Confirmation</h2>
        <p>{message}</p>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </Modal>
    </div>
  );
}

export default ConfirmationDialog;

import classes from "./Popup.module.css";
import { Modal } from "react-bootstrap";

const Popup = (props) => {
  const { showModal, modalHandler, children } = props;
  return (
    <Modal
      show={showModal}
      onHide={modalHandler}
      size="lg"
      className={classes.popup}
    >
      <Modal.Header closeButton />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <button className="btn" onClick={modalHandler}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;

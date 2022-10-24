import { Button, Modal, ModalFooter } from "@material-tailwind/react";

export default function WarnModal(props) {
  return (
    <Modal
      active={props.active}
      toggler={props.toggler}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <h2 className="font-normal py-4">{props.message}</h2>
      <ModalFooter>
        <Button
          variant="text"
          color="red"
          onClick={props.cancelMethod}
          className="mr-1"
        >
          <span>No</span>
        </Button>
        <Button variant="gradient" color="green" onClick={props.confirmMethod}>
          <span>Yes</span>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

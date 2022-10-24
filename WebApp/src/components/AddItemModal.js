import {
  Button,
  Input,
  Modal,
  ModalFooter,
  Textarea,
} from "@material-tailwind/react";

export default function AddItemModal(props) {
  if (props.type === "news" || "other") {
    return (
      <Modal active={props.active} toggler={props.toggler}>
        <div id="description" className="flex flex-col mb-4 mt-4">
          <div className="flex" style={{ margin: "0 0 10px 0" }}>
            <Input
              outline
              color="purple"
              placeholder="Title"
              label="Enter Title"
            />
          </div>
          <div className="w-96">
            <Textarea
              outline
              label="Enter description"
              placeholder="Description"
              className="overflow-auto w-100"
            ></Textarea>
          </div>
        </div>
        <ModalFooter>
          <Button
            variant="text"
            color="red"
            onClick={props.cancelMethod}
            className="mr-1"
            value="cancel"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              props.confirmMethod();
            }}
          >
            <span>Save</span>
          </Button>
        </ModalFooter>
      </Modal>
    );
  } else {
  }
}

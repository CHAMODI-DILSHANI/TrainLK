import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@material-tailwind/react";
import { Fragment } from "react";

export default function UserPopUp({ data, open, handleOpen }) {
  console.log(data);
  return (
    <>
      <p>asd</p>
      <Fragment>
        <Modal active={open} hander={handleOpen}>
          <ModalHeader>asd</ModalHeader>
          <ModalBody>
            <div className="flex justify-center flex-none h-20">
              <Image
                rounded
                className="w-1/2 h-1/2"
                src={
                  "/material-tailwind-dashboard-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                }
                alt="..."
              />
            </div>
            <div
              style={{
                display: "grid",
                "grid-template-columns": "repeat(2, minmax(0, 1fr))",
              }}
            >
              <h1>Name</h1>
              <p>Sandali</p>
              <h1>Email</h1>
              <p>sandaliranasinghe@gmail</p>
            </div>

            {/* <Textarea>fcvhbjnkl;</Textarea> */}
          </ModalBody>
          <ModalFooter>
            <Button varient="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    </>
  );
}

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalFooter,
  // ModalHeader,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

// const data2 = {
//   Name: "Sandali",
//   Email: "sandaliranasinghe@gmail.com",
//   Type: "administrator",
//   Contact: "071-123456789",
//   NIC: "991234567V",
// };

export default function UserPopUp({ data, open, handleOpen }) {
  var modReq = [];
  var tempData = data;
  if (tempData.modReq != undefined) {
    console.log("came here");
    modReq = tempData.modReq[0];
    console.log(modReq);
  }
  delete tempData.modReq;
  //   console.log(Object.keys(tempData2));
  return (
    <>
      {/* <p>asd</p> */}
      <Fragment>
        <Modal active={open} size="lg" toggler={handleOpen}>
          {/* <ModalHeader>User Details</ModalHeader> */}
          <ModalBody>
            <div className="flex justify-center flex-none h-20">
              <Image
                rounded
                className=""
                src={
                  "/material-tailwind-dashboard-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                }
                alt="..."
              />
            </div>
            <div className="">
              <div
                className="mt-4"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
                  // margi: "20 20 20 20",
                }}
              >
                {Object.keys(tempData).map((i) => (
                  <>
                    <h1 key={tempData.id} style={{ gridColumn: "span 3" }}>
                      {i}
                    </h1>
                    <div
                      key={tempData.Name}
                      className="font-light"
                      style={{ gridColumn: "span 7" }}
                    >
                      {tempData[i]}
                    </div>
                  </>
                ))}

                {Object.keys(modReq).map((i) => console.log(modReq[i]))}
                {Object.keys(modReq).map((i) => (
                  <>
                    <h1 key={modReq.contactNo} style={{ gridColumn: "span 3" }}>
                      {i}
                    </h1>
                    <div
                      key={modReq.nic}
                      className="font-light"
                      style={{ gridColumn: "span 7" }}
                    >
                      {modReq[i]}
                    </div>
                  </>
                ))}
              </div>
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

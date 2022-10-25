import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { Button, Icon } from "@material-tailwind/react";
import { useRef, useState } from "react";
import UserTableRow from "./UserTableRow";
const tableHeader = ["", "Name", "Email", "status", "Railway Line", "Accuracy"];

export default function CardTable2({ handleOpen, setPopData, data }) {
  // const ref = useRef(null);
  // console.log(data);
  useState(() => {
    // var tabs = require("tabs");
    var container = document.getElementById("tabular-container");
    // console.log(container);
    // tabs(container);
  });

  const [selected, setSelected] = useState("All");

  return (
    <Card>
      <CardHeader
        largeHeader
        contentPosition="between"
        color="purple"
        // contentPosition="left"
      >
        <div className="flex flex-row w-full">
          <h2 className="text-white text-2xl flex-1">Users</h2>
          <div className=" flex flex-row flex-none w-3/4 gap-10 justify-self-end justify-end">
            {/* <h2 className="flex-1">asd</h2> */}
            <Button
              onClick={() => {
                setSelected("All");
              }}
              color={selected == "All" ? "gray" : "blueGray"}
              className="min-w-[18%]"
            >
              All
            </Button>
            <Button
              color={selected == "Moderator" ? "gray" : "lightBlue"}
              className="min-w-[18%]"
              onClick={() => {
                setSelected("Moderator");
              }}
            >
              Moderators
            </Button>
            <Button
              color={selected == "Normal" ? "gray" : "green"}
              className="min-w-[18%]"
              onClick={() => {
                setSelected("Normal");
              }}
            >
              Normal
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        {/* {console.log(container)} */}
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableHeader.map((i) => (
                  <th
                    key={i}
                    className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"
                  >
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            {/* {console.log(data.filter((i) => i.Role == "Moderator"))} */}
            <tbody>
              {data
                .filter((i) => i.Role == selected || selected == "All")
                .map((i) => (
                  <UserTableRow
                    key={i.id}
                    i={i}
                    handleOpen={handleOpen}
                    setPopData={setPopData}
                  />
                  // <tr key={i.Name}>
                  //   <div className="w-10 h-10 rounded-full border-2 border-white">
                  //     <Image src={Team1} rounded alt="..." />
                  //   </div>
                  //   <th
                  //     className="order-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                  //     key={i.Name}
                  //   >
                  //     {i.Name}
                  //   </th>
                  //   <th
                  //     className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                  //     key={i.Email}
                  //   >
                  //     {i.Email}
                  //   </th>
                  //   <th
                  //     className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                  //     key={i.status}
                  //   >
                  //     <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                  //     {i.status}
                  //   </th>
                  //   <th
                  //     className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                  //     key={i.Name + 2}
                  //   >
                  //     {i.railwayLine}
                  //   </th>
                  //   <th
                  //     className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                  //     key={i.Accuracy}
                  //   >
                  //     <Progress
                  //       color={
                  //         i.Accuracy > 59
                  //           ? "green"
                  //           : i.Accuracy > 40
                  //           ? "teel"
                  //           : "red"
                  //       }
                  //       value={i.Accuracy}
                  //     />
                  //   </th>
                  //   <th>
                  //     <Button
                  //       type="buttonSM"
                  //       iconOnly
                  //       // varient="gradient"
                  //       color="cyan"
                  //       onClick={() => {
                  //         handleOpen();
                  //         setPopData(i);
                  //       }}
                  //     >
                  //       <div className="ml-6 mt-1">
                  //         <Icon size="2xl" name="info_outlined" />
                  //       </div>
                  //     </Button>
                  //   </th>
                  // </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

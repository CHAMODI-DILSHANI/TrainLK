import StatusCard from "components/StatusCard";
import TableCard2 from "components/TableCard2";
// import {
//   Modal,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   Button,
//   Textarea,
//   Image,
// } from "@material-tailwind/react";
import { useState } from "react";
import UserPopUp from "components/UsersPopUp";
const data = [
  {
    id: 1,
    Name: "Sandali Ranasinghe",
    Email: "sandaliranasinghe@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: 80,
    Role: "Admin",
  },
  {
    id: 2,
    Name: "Jithru Jayawantha",
    Email: "jithrujayawantha@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: "80",
    Role: "Moderator",
  },
  {
    id: 3,
    Name: "Ravindu Madubashana",
    Email: "ravindumaddubashana@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: "80",
    Role: "Normal",
  },
  {
    id: 4,
    Name: "Deenath Geeganage",
    Email: "deenathgeeganage@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: "39",
    Role: "Moderator",
  },
];

export default function Dashboard() {
  // model function
  const [open, setOpen] = useState(false);
  const [popData, setPopData] = useState({});
  const handleOpen = () => {
    setOpen(!open);
  };
  //

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard2
              handleOpen={handleOpen}
              setPopData={setPopData}
              data={data}
            />
          </div>
        </div>
      </div>
      {/* <Button onClick={handleOpen}>asda</Button> */}

      <UserPopUp open={open} data={popData} handleOpen={handleOpen} />
    </>
  );
}

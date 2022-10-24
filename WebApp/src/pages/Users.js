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
import { useEffect, useState } from "react";
import UserPopUp from "components/UsersPopUp";
import axios from "axios";

import serializeUserData from "../helpers/UserSerializer";
// const data = [
//   {
//     id: 1,
//     Name: "Sandali Ranasinghe",
//     Email: "sandaliranasinghe@gmail.com",
//     status: "online",
//     railwayLine: "Main Line",
//     Accuracy: 80,
//     Role: "Admin",
//   },
//   {
//     id: 2,
//     Name: "Jithru Jayawantha",
//     Email: "jithrujayawantha@gmail.com",
//     status: "online",
//     railwayLine: "Main Line",
//     Accuracy: "80",
//     Role: "Moderator",
//   },
//   {
//     id: 3,
//     Name: "Ravindu Madubashana",
//     Email: "ravindumaddubashana@gmail.com",
//     status: "online",
//     railwayLine: "Main Line",
//     Accuracy: "80",
//     Role: "Normal",
//   },
//   {
//     id: 4,
//     Name: "Deenath Geeganage",
//     Email: "deenathgeeganage@gmail.com",
//     status: "online",
//     railwayLine: "Main Line",
//     Accuracy: "39",
//     Role: "Moderator",
//   },
// ];
var data = [];

export default function Dashboard({ searchValue }) {
  useEffect(() => {
    // console.log(dat == null);
    if (data.length == 0)
      axios.get("http://10.22.164.157:8085/api/v1/users/all").then((res) => {
        // console.log("didn't change");
        // console.log(res.data);
        // data = [{ id: 1 }];
        data = res.data.map((i) => {
          var x = serializeUserData(i);
          // console.log(x);
          return x;
        });
        setModData(data);
        // console.log(data);
      });
  }, []);
  // console.log("meka user");
  // console.log(searchValue);
  // console.log(dat);
  const [modData, setModData] = useState(data);
  // model function
  const [open, setOpen] = useState(false);
  const [popData, setPopData] = useState({});
  const handleOpen = () => {
    setOpen(!open);
  };
  //
  // console.log("asdasd");
  // console.log(
  // modData.filter((i) => {
  //   // if (searchValue == "") {
  //   //   return true;
  //   // }
  //   for (var x in i) {
  //     // console.log(x + " | " + i[x]);
  //     // console.log(i[x].toString().toLowerCase().includes("sfgsgfgh"));
  //     // console.log(searchValue);
  //     if (i[x].toString().toLowerCase().includes(searchValue)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // })
  // );
  // console.log("checking data");
  // console.log(modData);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Top Moderator"
              amount="Jithru"
              percentage="100"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="More Than Others"
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
              title="Top Customer"
              amount="Kasun"
              percentage="100"
              percentageIcon="arrow_upward"
              percentageColor="orange"
              date="Ticket Purchases"
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
              data={modData.filter((i) => {
                if (searchValue == "") {
                  return true;
                }
                for (var x in i) {
                  if (
                    i[x]
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toString().toLowerCase())
                  ) {
                    return true;
                  }
                }
                return false;
              })}
            />
          </div>
        </div>
      </div>
      {/* <Button onClick={handleOpen}>asda</Button> */}

      <UserPopUp open={open} data={popData} handleOpen={handleOpen} />
    </>
  );
}

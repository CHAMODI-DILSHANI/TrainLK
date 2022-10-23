import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";
import Team3 from "assets/img/team-3-800x800.jpg";
import Team4 from "assets/img/team-4-470x470.png";
import { Button } from "@material-tailwind/react";
import { useRef, useState } from "react";
const tableHeader = ["", "Name", "Email", "status", "Railway Line", "Accuracy"];
const data = [
  {
    Name: "Sandali Ranasinghe",
    Email: "sandaliranasinghe@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: 80,
  },
  {
    Name: "Sandali Ranasinghe",
    Email: "sandaliranasinghe@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: 80,
  },
  {
    Name: "Sandali Ranasinghe",
    Email: "sandaliranasinghe@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: 80,
  },
  {
    Name: "Sandali Ranasinghe",
    Email: "sandaliranasinghe@gmail.com",
    status: "online",
    railwayLine: "Main Line",
    Accuracy: 39,
  },
];
const dataold = [
  {
    Project: "Argon Design System",
    Budget: "$2,500 USD",
    status: "pending",
    progress: 60,
  },
  {
    Project: "Black Dashboard Sketch",
    Budget: "$1,800 USD",
    status: "completed",
    progress: 100,
  },
  {
    Project: "Argon Design System",
    Budget: "$2,500 USD",
    status: "pending",
    progress: 30,
  },
];

export default function CardTable2() {
  const ref = useRef(null);
  useState(() => {
    // var tabs = require("tabs");
    var container = document.getElementById("tabular-container");
    console.log(container);
    // tabs(container);
  });

  return (
    <Card>
      <CardHeader
        largeHeader
        contentPosition="between"
        style={{ backgroundcolor: "red" }}
        color="purple"
        // contentPosition="left"
      >
        <div className="flex flex-row w-full">
          <h2 className="text-white text-2xl flex-1">Users</h2>
          <div class=" flex flex-row flex-none w-3/4 gap-10 justify-self-end justify-end">
            {/* <h2 className="flex-1">asd</h2> */}
            <Button color="gray" className="min-w-[18%]">
              All
            </Button>
            <Button color="lightBlue" className="min-w-[18%]">
              Moderators
            </Button>
            <Button color="green" className="min-w-[18%]">
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
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    {i}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((i) => (
                <tr key={i.Name}>
                  <div className="w-10 h-10 rounded-full border-2 border-white">
                    <Image src={Team1} rounded alt="..." />
                  </div>
                  <th
                    className="order-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                    key={i.Name}
                  >
                    {i.Name}
                  </th>
                  <th
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                    key={i.Email}
                  >
                    {i.Email}
                  </th>
                  <th
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                    key={i.status}
                  >
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                    {i.status}
                  </th>
                  <th
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                    key={i.Name + 2}
                  >
                    {i.railwayLine}
                  </th>
                  <th
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                    key={i.Accuracy}
                  >
                    <Progress
                      color={
                        i.Accuracy > 59
                          ? "green"
                          : i.Accuracy > 40
                          ? "teel"
                          : "red"
                      }
                      value={i.Accuracy}
                    />
                  </th>
                  <th>
                    <Button />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

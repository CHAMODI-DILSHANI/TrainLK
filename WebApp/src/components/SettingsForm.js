import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
// import { Select } from "@material-tailwind/react/Select";
// import { Option } from "@material-tailwind/react/Option";
import { useState } from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Table from "components/Table";
import {
  Tabs,
  Panel,
  Tab,
  TabList,
  PanelList,
} from "@react-tabtab-next/tabtab";

const newsData = [
  {
    newsID: 4,
    title: "Some Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    user: "Sandy Blaq",
    date: "2022-10-23",
  },
  {
    newsID: 3,
    title: "Some Other Title",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    ad reprehenderit omnis perspiciatis aut odit! Unde architecto
    perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
    praesentium magni corrupti explicabo!`,
    user: "Sandy Blaq",
    date: "2022-10-23",
  },
];

export default function SettingsForm() {
  const [trainId, setTrainId] = useState("");
  const [frequency, setFrequency] = useState("");
  const [type, setType] = useState("");
  const [stations, setStation] = useState([]);
  //   const [stationIndex, setStationIndex] = useState(1);

  const addNewStation = () => {
    setStation((stations) => [
      ...stations,
      {
        stationId: "",
        in: "",
        out: "",
      },
    ]);
  };

  const deleteStation = (index) => {
    console.log(index);
    setStation((currentStations) => {
      const updatedStations = currentStations.filter((station, i) => {
        console.log(index, i, index !== i);
        return index !== i;
      });

      return updatedStations;
    });
  };

  const updateStationId = (e, index) => {
    setStation((currentStations) => {
      const updatedStations = currentStations.map((station, i) => {
        if (index === i) {
          return {
            ...station,
            stationId: e.target.value,
          };
        } else {
          return station;
        }
      });
      return updatedStations;
    });
  };

  const updateStationIn = (e, index) => {
    setStation((currentStations) => {
      const updatedStations = currentStations.map((station, i) => {
        if (index === i) {
          return {
            ...station,
            in: e.target.value,
          };
        } else {
          return station;
        }
      });
      return updatedStations;
    });
  };

  const updateStationOut = (e, index) => {
    setStation((currentStations) => {
      const updatedStations = currentStations.map((station, i) => {
        if (index === i) {
          return {
            ...station,
            out: e.target.value,
          };
        } else {
          return station;
        }
      });
      return updatedStations;
    });
  };

  const onSubmit = () => {
    console.log({
      trainId,
      frequency,
      type,
      stations,
    });
  };

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Add Schedules</h2>
          {/* <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Settings
                    </Button> */}
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Train Information
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              Train ID <br></br>
              <Dropdown
                onChange={(e) => setTrainId(e.target.value)}
                color="transparent"
              size="sm"
              buttonType="link"
              buttonText={
                <div className="py-2.5 font-medium flex items-center">
                  <span className="ml-2">Select Train ID</span>
                </div>
              }
              ripple="light"
              >
                <DropdownItem> 5134743 </DropdownItem>
                <DropdownItem> 4353435</DropdownItem>
                <DropdownItem> 3334435 </DropdownItem>
                <DropdownItem> 4534435 </DropdownItem>
                <DropdownItem> 3335435 </DropdownItem>
                <DropdownItem> 8866654 </DropdownItem>
                <DropdownItem> 8443443 </DropdownItem>
                
              </Dropdown>
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input
                type="number"
                color="purple"
                placeholder="Frequency"
                onChange={(e) => setFrequency(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Type"
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Stations
          </h6>
          {stations.map((station, index) => (
            <div className="flex flex-wrap mt-10">
              <div className="w-full lg:w-12/12 mb-10 font-light">
                <Input
                  type="number"
                  color="purple"
                  placeholder="Station ID"
                  value={station.stationId}
                  onChange={(e) => updateStationId(e, index)}
                />
              </div>
              <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                <Input
                  type="text"
                  color="purple"
                  placeholder="Station IN"
                  value={station.in}
                  onChange={(e) => updateStationIn(e, index)}
                />
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                <Input
                  type="text"
                  color="purple"
                  placeholder="Station OUT"
                  value={station.out}
                  onChange={(e) => updateStationOut(e, index)}
                />
              </div>
              <div className="flex">
                <div>
                  <Button type="button" onClick={() => deleteStation(index)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Button type="button" color="green" onClick={addNewStation}>
            Add +
          </Button>{" "}
          <br></br>
          <Button type="button " onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </CardBody>

      <PanelList>
        <Panel>
          <Table type="news" data={newsData} />
        </Panel>
      </PanelList>
    </Card>
  );
}

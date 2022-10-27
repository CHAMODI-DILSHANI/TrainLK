import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
// import { Select } from "@material-tailwind/react/Select";
// import { Option } from "@material-tailwind/react/Option";

import utils from "./../utils";

import { useState } from "react";
import axios from "axios";

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
        stationID: "",
        in: "",
        out: "",
      },
    ]);
  };

  const createSchedule = () => {
    try {
      axios
        .post(`${utils.api}/schedules`, {
          trainID:trainId,
          frequency,
          type,
          stations,
        })
        .then((res) => {
          console.log(res);
          alert("created record successfully");
        });
    } catch (e) {
      console.error(e);
    }
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

  const updateStationID = (e, index) => {
    setStation((currentStations) => {
      const updatedStations = currentStations.map((station, i) => {
        if (index === i) {
          return {
            ...station,
            stationID: e.target.value,
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
      trainID : trainId,
      frequency,
      type,
      stations,
    });
    createSchedule();
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
              <select
                onChange={(e) => setTrainId(e.target.value.split(" ")[0])}
                title="Train ID"
              >
                <option> 1 - Colombo Fort </option>
                <option> 2 - Hikkaduwa</option>
                <option> 3 - Kandy </option>
                <option> 4 - Galle </option>
                <option> 5 - Matale </option>
                <option> 6 - Trincomalee </option>
                <option> 7 - </option>
                <option> 8 - </option>
                <option> 9 - </option>
                <option> 10 - </option>
                <option> 11 - </option>
                <option> 12 - </option>
                <option> 13 - </option>
                <option> 14 - </option>
                <option> 15 - </option>
              </select>
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
                  value={station.stationID}
                  onChange={(e) => updateStationID(e, index)}
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
    </Card>
  );
}

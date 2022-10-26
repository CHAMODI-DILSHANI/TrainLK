import Table from "components/Table";
import { Link } from "react-router-dom";
// import Dropdown from "@material-tailwind/react/Dropdown";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import DropdownItem from "@material-tailwind/react/DropdownItem";
import { bootstrap } from "@react-tabtab-next/themes";
import {
  Tabs,
  Panel,
  Tab,
  TabList,
  PanelList,
} from "@react-tabtab-next/tabtab";
import Icon from "@material-tailwind/react/Icon";
import axios from "axios";
import utils from "./../utils";
import { useEffect, useState } from "react";

var newsData = [
  {
    newsID: 0,
    title: "",
    description: "",
    user: "",
    timestamp: "",
  },
];

const otherData = [
  {
    dataID: 4,
    title: "Some Title",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    user: "Sandy Blaq",
    date: "2022-10-23",
  },
  {
    dataID: 3,
    title: "Some Other Title",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    ad reprehenderit omnis perspiciatis aut odit! Unde architecto
    perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
    praesentium magni corrupti explicabo!`,
    user: "Sandy Blaq",
    date: "2022-10-23",
  },
];

const lostAndFoundData = [
  {
    itemID: 0,
    type: "",
    itemType: "",
    description: ``,
    user: "",
    timestamp: "",
    contactNo: "",
  },
];

export default function Dashboard() {
  useEffect(() => {
    if (news.length === 0) {
      axios.get(`${utils.api}/items`).then((res) => {
        // console.log(res.data.news);
        setNews(res.data.news);
        setLostAndFoundItems(res.data.lostandFound);
      });
    }
  }); //dependency is an empty array since happens at load time
  const [news, setNews] = useState([]);
  const [lostAndFoundItems, setLostAndFoundItems] = useState(lostAndFoundData);

  const options = ["This Month", "Previous Month", "Earlier"];

  const arrowClosed = <span className="arrow-closed" />;
  const arrowOpen = <span className="arrow-open" />;
  const defaultOption = options[0];
  // console.log(lostAndFoundItems);
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {/* <Dropdown
              color="transparent"
              size="sm"
              buttonType="link"
              buttonText={
                <div className="py-2.5 font-medium flex items-center">
                  <Icon name="calendar_month" size="2xl" color="white" />
                  <span className="ml-2">This Month</span>
                </div>
              }
              ripple="light"
            >
              <Link to="/">
                <DropdownItem color="lightBlue">Previous Month</DropdownItem>
              </Link>
              <Link to="/">
                <DropdownItem color="lightBlue">Last Month</DropdownItem>
              </Link>
            </Dropdown> */}
            <Dropdown
              arrowClosed={arrowClosed}
              arrowOpen={arrowOpen}
              options={options}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <Tabs customStyle={bootstrap}>
              <TabList>
                <Tab>News</Tab>
                <Tab>
                  Lost and Found
                  {/* <Card></Card> */}
                </Tab>
                <Tab>Other</Tab>
              </TabList>
              <PanelList>
                <Panel>
                  <Table type="news" data={news} reload={setNews} />
                </Panel>
                <Panel>
                  <Table type="lostAndFound" data={lostAndFoundItems} />
                </Panel>
                <Panel>
                  <Table type="other" data={otherData} />
                </Panel>
              </PanelList>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

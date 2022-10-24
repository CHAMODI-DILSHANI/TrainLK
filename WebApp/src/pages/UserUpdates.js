import Table from "components/Table";
import { Link } from "react-router-dom";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import { bootstrap } from "@react-tabtab-next/themes";
import {
  Tabs,
  Panel,
  Tab,
  TabList,
  PanelList,
} from "@react-tabtab-next/tabtab";
import Icon from "@material-tailwind/react/Icon";

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
    itemID: 3,
    type: "Lost",
    itemType: "Wallet",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    ad reprehenderit omnis perspiciatis aut odit! Unde architecto
    perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
    praesentium magni corrupti explicabo!`,
    user: "Sandy Blaq",
    date: "2022-10-23",
    contact: "071 123 4567",
  },
  {
    itemID: 4,
    type: "Found",
    itemType: "Hand Bag",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit`,
    user: "N Blaq",
    date: "2022-10-23",
    contact: "071 123 4567",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <Dropdown
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
            </Dropdown>
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
                  <Table type="news" data={newsData} />
                </Panel>
                <Panel>
                  <Table type="lostAndFound" data={lostAndFoundData} />
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

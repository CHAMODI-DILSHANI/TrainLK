import Card from "@material-tailwind/react/Card";
import NewsRow from "./NewsRow";
import CardBody from "@material-tailwind/react/CardBody";
import {
  Modal,
  ModalFooter,
  Button,
  Textarea,
  Input,
  Icon,
  Dropdown,
  DropdownItem,
} from "@material-tailwind/react";

import { useState } from "react";
import WarnModal from "./WarnModal";
import LostAndFoundRow from "./LostAndFoundRow";
import AddItemModal from "./AddItemModal";

export default function CardTable(props) {
  const [open, setOpen] = useState(false);
  const [warn, setWarn] = useState(false);
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const handleOpen = () => setOpen(!open);
  const handleOpenWithConfirm = () => {
    setOpen(!open);
    setWarn(!warn);
  };
  const handleWarn = () => setWarn(!warn);
  const handleWarnWithConfirm = () => {
    setWarn(!warn);
  };
  const handleAdd = () => setAdd(!add);
  const handleAddWithConfirm = () => {
    setAdd(!add);
  };
  const handleRemove = () => setRemove(!remove);
  const handleAddItem = () => setAddItem(!addItem);
  const handleAddItemWithConfirm = () => {
    setAddItem(!addItem);
    setAdd(!add);
  };
  if (props.type === "news") {
    return (
      <>
        <Card>
          <Modal active={open} toggler={handleOpen}>
            <div id="description" className="flex flex-col mb-4 mt-4">
              <div className="flex" style={{ margin: "0 0 10px 0" }}>
                <Input
                  outline
                  color="purple"
                  placeholder="Title"
                  defaultValue={selectedData.title}
                />
              </div>
              <div className="w-96">
                <Textarea
                  outline
                  label="News"
                  placeholder="Description"
                  className="overflow-auto w-100"
                  defaultValue={selectedData.description}
                ></Textarea>
              </div>
            </div>
            <ModalFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
                value="cancel"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handleOpenWithConfirm}
              >
                <span>Confirm</span>
              </Button>
            </ModalFooter>
          </Modal>
          <WarnModal
            active={add}
            toggler={handleAdd}
            message="Are you sure you want to save data?"
            cancelMethod={handleAdd}
            confirmMethod={handleAddWithConfirm}
          />
          <WarnModal
            active={warn}
            toggler={handleWarn}
            message="Are you sure you want to edit data?"
            cancelMethod={handleWarn}
            confirmMethod={handleWarnWithConfirm}
          />
          <WarnModal
            active={remove}
            toggler={handleRemove}
            message="Are you sure you want to delete?"
            cancelMethod={handleRemove}
            confirmMethod={handleRemove}
          />
          <AddItemModal
            type="news"
            active={addItem}
            toggler={handleAddItem}
            cancelMethod={handleAddItem}
            confirmMethod={handleAddItemWithConfirm}
          />
          <CardBody>
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Title
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Description
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      User
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Date
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map(
                    (i) => (
                      // console.log(i)
                      <NewsRow
                        key={i.newsID}
                        handleOpen={handleOpen}
                        handleRemove={handleRemove}
                        setSelectedData={setSelectedData}
                        data={i}
                      />
                    )
                    // console.log(i);
                  )}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <div className="mt-5 flex flex-col w-full">
          <div className="mt-5 flex w-full justify-end">
            <Button onClick={handleAddItem} color="purple" size="md">
              <Icon name="add" size="2xl" />
              <p className="text-sm">New Item</p>
            </Button>
          </div>
          <div className="mt-5 flex w-full gap-4 justify-end">
            <Button color="blue" size="md">
              <Icon name="west" size="2xl" />
            </Button>
            <Button color="blue" size="md">
              <Icon name="east" size="2xl" />
            </Button>
          </div>
        </div>
      </>
    );
  } else if (props.type === "lostAndFound") {
    return (
      <>
        <Card>
          <Modal active={open} toggler={handleOpen}>
            <div id="description" className="flex flex-col mb-4 mt-4">
              <h2 className="font-bold">{selectedData.title}</h2>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
                style={{ margin: "0 0 10px 0" }}
              >
                {/* <Input
                  outline
                  color="purple"
                  placeholder="Type"
                  defaultValue={selectedData.type}
                /> */}
                <Dropdown
                  //   color="black"
                  size="sm"
                  placeholder="Item Type"
                  buttonText={
                    <div className="py-2.5 font-black flex items-center">
                      {selectedData.type}
                    </div>
                  }
                  ripple="light"
                >
                  {() => {
                    if (selectedData.type === "Lost")
                      <DropdownItem onClick={this.buttonText} color="lightBlue">
                        Found
                      </DropdownItem>;
                    else <DropdownItem color="lightBlue">Lost</DropdownItem>;
                  }}
                  {/* <DropdownItem color="lightBlue">Previous Month</DropdownItem> */}
                </Dropdown>
              </div>
              <div className="flex" style={{ margin: "0 0 10px 0" }}>
                <Input
                  outline
                  color="purple"
                  placeholder="Item Type"
                  defaultValue={selectedData.itemType}
                />
              </div>
              <div className="w-96">
                <Textarea
                  outline
                  label="News"
                  placeholder="Description"
                  className="overflow-auto w-100"
                  defaultValue={selectedData.description}
                ></Textarea>
              </div>
              <div className="flex" style={{ margin: "4px 0 0 0" }}>
                <Input
                  outline
                  color="purple"
                  placeholder="Contact"
                  defaultValue={selectedData.contact}
                />
              </div>
            </div>
            <ModalFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
                value="cancel"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handleOpenWithConfirm}
              >
                <span>Confirm</span>
              </Button>
            </ModalFooter>
          </Modal>
          <WarnModal
            active={warn}
            toggler={handleWarn}
            message="Are you sure you want to edit data?"
            cancelMethod={handleWarn}
            confirmMethod={handleWarnWithConfirm}
          />
          <WarnModal
            active={remove}
            toggler={handleRemove}
            message="Are you sure you want to delete?"
            cancelMethod={handleRemove}
            confirmMethod={handleRemove}
          />
          <AddItemModal
            type="lostAndFound"
            active={addItem}
            toggler={handleAddItem}
            cancelMethod={handleAddItem}
            confirmMethod={handleAddItemWithConfirm}
          />
          <CardBody>
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Type
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Item Type
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Description
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Image
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      User
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Date
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Contact No
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map(
                    (i) => (
                      // console.log(i)
                      <LostAndFoundRow
                        key={i.itemID}
                        handleOpen={handleOpen}
                        handleRemove={handleRemove}
                        setSelectedData={setSelectedData}
                        data={i}
                      />
                    )
                    // console.log(i);
                  )}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <div className="mt-5 flex flex-col w-full">
          <div className="mt-5 flex w-full justify-end">
            <Button
              color="purple"
              onClick={handleAddItem}
              size="md"
              disabled
              hover="false"
              className="cursor-not-allowed opacity-50 disabled:pointer-events-none"
            >
              <Icon name="add" size="2xl" />
              <p className="text-sm">New Item</p>
            </Button>
          </div>
          <div className="mt-5 flex w-full gap-4 justify-end">
            <Button color="blue" size="md">
              <Icon name="west" size="2xl" />
            </Button>
            <Button color="blue" size="md">
              <Icon name="east" size="2xl" />
            </Button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Card>
          <Modal active={open} toggler={handleOpen}>
            <div id="description" className="flex flex-col mb-4 mt-4">
              <div className="flex" style={{ margin: "0 0 10px 0" }}>
                <Input
                  outline
                  color="purple"
                  placeholder="Title"
                  defaultValue={selectedData.title}
                />
              </div>
              <div className="w-96">
                <Textarea
                  outline
                  label="News"
                  placeholder="Description"
                  className="overflow-auto w-100"
                  defaultValue={selectedData.description}
                ></Textarea>
              </div>
            </div>
            <ModalFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
                // value="cancel"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handleOpenWithConfirm}
              >
                <span>Confirm</span>
              </Button>
            </ModalFooter>
          </Modal>
          <WarnModal
            active={add}
            toggler={handleAdd}
            message="Are you sure you want to save data?"
            cancelMethod={handleAdd}
            confirmMethod={handleAddWithConfirm}
          />
          <WarnModal
            active={warn}
            toggler={handleWarn}
            message="Are you sure you want to edit data?"
            cancelMethod={handleWarn}
            confirmMethod={handleWarnWithConfirm}
          />
          <WarnModal
            active={remove}
            toggler={handleRemove}
            message="Are you sure you want to delete?"
            cancelMethod={handleRemove}
            confirmMethod={handleRemove}
          />
          <AddItemModal
            type="other"
            active={addItem}
            toggler={handleAddItem}
            cancelMethod={handleAddItem}
            confirmMethod={handleAddItemWithConfirm}
          />
          <CardBody>
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Title
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Description
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      User
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Date
                    </th>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map(
                    (i) => (
                      // console.log(i)
                      <NewsRow
                        key={i.dataID}
                        handleOpen={handleOpen}
                        handleRemove={handleRemove}
                        setSelectedData={setSelectedData}
                        data={i}
                      />
                    )
                    // console.log(i);
                  )}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
        <div className="mt-5 flex flex-col w-full">
          <div className="mt-5 flex w-full justify-end">
            <Button onClick={handleAddItem} color="purple" size="md">
              <Icon name="add" size="2xl" />
              <p className="text-sm">New Item</p>
            </Button>
          </div>
          <div className="mt-5 flex w-full gap-4 justify-end">
            <Button color="blue" size="md">
              <Icon name="west" size="2xl" />
            </Button>
            <Button color="blue" size="md">
              <Icon name="east" size="2xl" />
            </Button>
          </div>
        </div>
      </>
    );
  }
}

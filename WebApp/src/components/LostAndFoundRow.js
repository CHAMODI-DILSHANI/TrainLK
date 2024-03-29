import { Button, Icon } from "@material-tailwind/react";

export default function LostAndFoundRow(props) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <tr>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {props.data.type}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {props.data.itemType}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {props.data.description.length > 75
          ? props.data.description.slice(0, 75) + "..."
          : props.data.description}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <img src={props.data.image} height={30} width={30} />
        {/* {props.data.image} */}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {props.data.user}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {formatDate(props.data.timestamp)}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {props.data.contactNo}
      </th>
      <th className="flex gap-4 border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {/* <Button
          onClick={() => {
            props.handleOpen();
            props.setSelectedData(props.data);
          }}
          className="border-b border-gray-200 bg-#424242 rounded-3xl text-gray"
          color="blue"
          buttonType="outline"
          size="sm"
          rounded
          variant="outlined"
        >
          <Icon name="edit" color="#424242" size="xl" />
        </Button> */}
        <Button
          onClick={() => {
            props.handleRemove();
            props.removeIdSet(props.data.itemID);
          }}
          className="border-b border-gray-200 bg-#424242 rounded-3xl text-gray"
          color="red"
          buttonType="outline"
          size="sm"
          rounded
          variant="outlined"
        >
          <Icon name="delete" color="#424242" size="xl" />
        </Button>
      </th>
    </tr>
  );
}

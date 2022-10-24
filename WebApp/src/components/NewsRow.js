import { Button, Icon } from "@material-tailwind/react";

export default function NewsRow({
  handleOpen,
  handleRemove,
  data,
  setSelectedData,
}) {
  return (
    <tr>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {data.title}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {data.description.length > 90
          ? data.description.slice(0, 90) + "..."
          : data.description}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {data.user}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {data.date}
      </th>
      <th className="flex gap-4 border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <Button
          onClick={() => {
            handleOpen();
            setSelectedData(data);
          }}
          className="border-b border-gray-200 bg-#424242 rounded-3xl text-gray"
          color="blue"
          buttonType="outline"
          size="sm"
          rounded
          variant="outlined"
        >
          <Icon name="edit" color="#424242" size="xl" />
        </Button>
        <Button
          onClick={handleRemove}
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

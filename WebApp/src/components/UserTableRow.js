import { Button, Icon, Image, Progress } from "@material-tailwind/react";
import { render } from "@testing-library/react";
import Team1 from "assets/img/team-1-800x800.jpg";
// import Team2 from "assets/img/team-2-800x800.jpg";
// import Team3 from "assets/img/team-3-800x800.jpg";
// import Team4 from "assets/img/team-4-470x470.png";

export default function UserTableRow({ i, handleOpen, setPopData }) {
  return (
    <tr>
      <th className="w-10 h-10 rounded-full border-2 border-white">
        <Image src={Team1} rounded alt="..." />
      </th>
      <th className="order-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {i.Name}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {i.Email}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i> {i.status}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {i.railwayLine}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <Progress
          color={i.Accuracy > 59 ? "green" : i.Accuracy > 40 ? "teel" : "red"}
          value={i.Accuracy.toString()}
        />
      </th>
      <th>
        <Button
          type="buttonSM"
          iconOnly
          // varient="gradient"
          color="cyan"
          onClick={() => {
            handleOpen();
            setPopData(i);
          }}
        >
          <div className="ml-6 mt-1">
            <Icon size="2xl" name="info_outlined" />
          </div>
        </Button>
      </th>
    </tr>
  );
}

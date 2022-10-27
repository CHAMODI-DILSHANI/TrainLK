import { Button, Input, Label } from "@material-tailwind/react";

export default function Login() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="flex flex-col gap-8 p-10 border border-gray-600">
        <Label>User Name: </Label>
        <Input outline color="purple" placeholder="Username" />
        <Label>Password: </Label>
        <Input outline type="password" color="purple" placeholder="Password" />
        <Button color="blue" size="md">
          {/* <Icon name="add" size="2xl" /> */}
          <p className="text-sm">Login</p>
        </Button>
      </div>
    </>
  );
}

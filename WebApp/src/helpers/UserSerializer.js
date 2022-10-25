export default function serializeUserData(data) {
  // console.log(data);
  var x = {
    image: data.image ?? undefined,
    id: data.id,
    Name: data.firstName + " " + data.lastName,
    Email: data.email,
    status: "online",
    railwayLine: "Main Line",
    Accuracy: "90",
    Role:
      data.id == 3
        ? "Normal"
        : data.id == 2
        ? "Moderator"
        : data.id == 1
        ? "Admin"
        : "",
  };
  if (data.modReq) {
    x.modReq = data.modReq;
  }
  // console.log(data);
  return x;
}

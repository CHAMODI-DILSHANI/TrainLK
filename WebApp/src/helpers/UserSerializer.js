export default function serializeUserData(data) {
  console.log(data);
  var x = {
    id: data.id,
    Name: data.firstName + " " + data.lastName,
    Email: data.email,
    status: "online",
    railwayLine: "Main Line",
    Accuracy: "90",
    Role: data.id == 0 ? "Normal" : data.id == 1 ? "Moderator" : "Admin",
  };
  if (data.modReq) {
    x.modReq = data.modReq;
  }
  console.log(data);
  return x;
}

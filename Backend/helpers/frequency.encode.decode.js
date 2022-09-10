// console.log(frequency("11001"));
// chenges frequency
function changefrequency(string) {
  const daily = /1111111/;
  const weekly = /0111110/;
  const weekend = /1000001/;
  if (daily.test(string)) {
    return "Daily";
  } else if (weekly.test(string)) {
    return "Weelkly";
  } else if (weekend.test(string)) {
    return "Weekend";
  } else {
    return "Other";
  }
}

async function encodeDate(day) {
  if (day == "Mon") {
    return "_1______";
  } else if (day == "Tue") {
    return "__1____";
  } else if (day == "Wed") {
    return "___1___";
  } else if (day == "Thu") {
    return "____1__";
  } else if (day == "Fri") {
    return "_____1_";
  } else if (day == "Sat") {
    return "______1";
  } else {
    return "1______";
  }
}

module.exports = { changefrequency, encodeDate };

const data = require("./data.json");

const media = data.media.filter(
  ({ custom_properties }) => custom_properties.isPrimary
);
// console.log(medzia);

const trip_details = data.trip_details.map(({ start_date, end_date }) => ({
  start_date,
  end_date,
}));

// console.log(trip_details)
const stringData = `${data.destination.name} - ${data.destination.price} | ${data.save_percent} | ${data.available_seats_count} seats available`;
// console.log(stringData)

const tourBenefits = data.tour_benefits.filter(
  ({ title, description }) => title !== null && description !== null
);
// console.log(tourBenefits)
const currentDate = new Date();
const previousTripDetails = data.trip_details.filter(
  ({ start_date }) => currentDate - new Date(start_date) > 24 * 60 * 60 * 1000
);

console.log(previousTripDetails);

const string = "kolli hillswhere we can saw agaya gangai"
  .split(" ")
  .map((item) => item.replace(item[0], item[0].toUpperCase()))
  .join(" ");
console.log(string)


function sample(a,b){
  return a+b;
}

console.log(sample(12,12))

for(let item in object) {
  
}

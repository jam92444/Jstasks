function DOB(dob) {
  const birthDate = new Date(dob);
  const currentDate = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //  calculating age
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // fixing proper age
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() == birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  const resultDate = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  const dayOfweek = resultDate.getDay();
  const resultantDay = weekDays[dayOfweek];

  console.log('You birth day:',resultantDay);
  console.log('age:', age)
}

DOB("2003-04-01");

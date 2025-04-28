function MinuteCOunt(time) {
  const userTime = new Date(time).getTime();
  const now = new Date().getTime(); 
  if((now - userTime)<0){
    console.log("Future Date");  
    return
  }
  const diff = Math.floor((now - userTime) / (24 * 60 * 60 * 1000));
  return diff * 24 * 60;
}

console.log(MinuteCOunt("March 28, 2025 09:04:01"));


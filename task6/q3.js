const x = 5;
const y = "5";
if (x == y) {
 console.log("Loose equal");
}
if (x === y) {
 console.log("Strict equal");
}

// loose equal used to compare only the values not type.It log "Loose equal" cuz it is not comparing the type here both are different type but the values are same.
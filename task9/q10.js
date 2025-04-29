const extractDomain = url => url.split("/")[2]?.replace("www.", "");
const result = extractDomain("https://www.example.in/page");
console.log(result); 


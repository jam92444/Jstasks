function extractDomain(url) {
  const res = url.split("/");
  return res[2].replace("www.", "");
}

const result = extractDomain("https://www.example.in/page");
console.log(result);

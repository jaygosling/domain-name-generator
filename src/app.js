/* eslint-disable */
import "bootstrap";
import "./style.css";
let article = ["our", "my", "your", "a", "their"];
let adjective = [
  "bloody",
  "big",
  "great",
  "own",
  "fantastic",
  "amazing",
  "small",
  "tiny",
  "obnoxious",
  "terrible"
];
let noun = ["house", "universe", "car", "project", "cat"];
let domain = [
  ".com",
  ".us",
  ".eu",
  ".es",
  ".wtf",
  ".de",
  ".fr",
  ".co.uk",
  ".ie",
  ".cat"
];
let button = document.querySelector("#genButton");
let domainName = document.querySelector("#domName");
let allofthem = "";
button.addEventListener("click", function() {
  for (let x in article) {
    for (let y in adjective) {
      for (let z in noun) {
        for (let a in domain) {
          allofthem =
            allofthem +
            article[x] +
            adjective[y] +
            noun[z] +
            domain[a] +
            "</br>";
        }
      }
    }
  }
  domainName.innerHTML = allofthem;
});

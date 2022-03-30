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
button.addEventListener("click", function() {
  let art = article[Math.floor(Math.random() * 5)];
  let adj = adjective[Math.floor(Math.random() * 10)];
  let nouns = noun[Math.floor(Math.random() * 5)];
  let dom = domain[Math.floor(Math.random() * 10)];
  domainName.innerHTML = art + adj + nouns + dom;
});

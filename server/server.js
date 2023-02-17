const express = require("express");
const app = express();
const cors = require("cors");

app.listen(5006, () => {
  console.log("listening on server 5002");
});

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
let api = [];

(async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/kennymkchan/funko-pop-data/master/funko_pop.json"
  );
  data = await response.json(); // Here you have the data that you need
  // console.log(JSON.stringify(data.results, null, 2));
  myJSON = JSON.stringify(data.results);
  for (let i = 0; i < 1000; i++) {
    let initstr = data[i].imageName;
    let str = initstr.toString();
    let endstr = str.substring(11);
    let newstr = "https://images" + endstr;
    data[i].imageName = newstr;
    api.push(data[i]);
  }
})();

app.get("/api", (req, res) => {
  res.send(api);
});

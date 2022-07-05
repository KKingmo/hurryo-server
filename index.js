const express = require("express");
const app = express();
const cors = require("cors");
const parklotsdata = require("./Router/parklotsdata");
const toiletsdata = require("./Router/toiletsdata");
const port = process.env.PORT || 5000;

app.use(cors());

app.use("/api/parklots", parklotsdata);
app.use("/api/toilets", toiletsdata);

app.get("/", (req, res) => {
  res.send("[급해요] 서버입니다~");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

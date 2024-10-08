require("dotenv").config();// Ensure dotenv is required at the top

const express = require("express");
const app = express();
const PORT = 7000;

const multer = require("multer");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extented: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/profileUpload", upload.array("profile-files", 12), (req, res) => {
  let response = '<a href="/">Home</a><br>';
  response += "Files uploaded successfully.<br>";
  req.files.forEach((file) => {
    response += `<img src="/uploads/${file.filename}" style="width:200px;" /><br>`;
  });
  res.send(response);
});

require("./dbconnection").connectiondb();

const userRoute = require("./routers/userRoute");
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

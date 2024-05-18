const express = require("express");

const app = express();

// app.use(express.static("public")); // folder as parameter

app.set("view engine", "ejs"); /// use view engine
// app.use(logger); //define middleware on top

app.get("/", (req, res) => {
  console.log("get response");
  //   res.sendStatus(500); // send status code ... 200 is OK, 201 is Sent, 400 is client error, 500 is server error.

  //   res.status(500).send("Hi"); // passing error message
  //   res.status(500).json({ message: "Error" }); // passing error message in json

  //   res.download(/*file path*/) // download file from server to client

  res.render("index"); // render HTML

  //   res.send("Hi (get response)");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

// function logger(req, res, next) { // middleware
//   console.log(req.originalURL);
//   next();
// }

app.listen(3000);

// testing

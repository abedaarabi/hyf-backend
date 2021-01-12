const express = require("express");
const app = express();
const calculatorRouter = require("./calculator.js");
const crossfitRouter = require("./traning.js");

app.use((req, res, next) => {
  next();
});
app.use("/calculator", calculatorRouter);
app.use("/crossfit", crossfitRouter);

app.get("/", (req, res) =>
  res.send(`<h1 style = color:green>Hello World</h1>
<h2 style = color:red>Goodby World</h2>
`)
);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

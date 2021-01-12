const express = require("express");
const app = express();
const calculatorRouter = express.Router();
const { calc } = require("./addition.js");

calculatorRouter.get("/addition", (req, res) => {
  const { firstParam } = req.query;
  const { secondParam } = req.query;

  console.log(addition(firstParam, secondParam));
  res.json(
    calc(firstParam, secondParam, (acc, value) => {
      return value + acc;
    })
  );
});

calculatorRouter.get("/subtraction", (req, res) => {
  const { firstParam } = req.query;
  const { secondParam } = req.query;

  res.json(
    calc(firstParam, secondParam, (acc, value) => {
      return value - acc;
    })
  );
});
calculatorRouter.get("/multiplication", (req, res) => {
  const { firstParam } = req.query;
  const { secondParam } = req.query;

  res.json(
    calc(firstParam, secondParam, (acc, value) => {
      return value * acc;
    })
  );
});
calculatorRouter.get("/division", (req, res) => {
  const { firstParam } = req.query;
  const { secondParam } = req.query;

  res.json(
    calc(firstParam, secondParam, (acc, value) => {
      return value / acc;
    })
  );
  console.log(division(firstParam, secondParam));
});

module.exports = calculatorRouter;

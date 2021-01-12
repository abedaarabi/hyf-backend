const express = require("express");
const app = express();
const crossfitRouter = express.Router();

crossfitRouter.get("/:name", (req, res) => {
  req.params.name == "MOE"
    ? res.send(
        `<h2 style = background-color:green> Welcome to Crossfit page </h2>`
      )
    : res.send(
        `<h2 style = background-color:red> Welcome to Crossfit page </h2>`
      );
});
crossfitRouter.get("/pullups", (req, res) => {
  res.send(`
  <body style = background-color:#FFE4C4>
  <h2 > Pullups </h2>
  </body>`);
});
module.exports = crossfitRouter;

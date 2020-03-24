import express from "express";
import chalk from "chalk";
import phones from "../assets/phones";

const app = express();
const router = express.Router();

app.use("/", router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
const port = process.env.PORT || 3000;

router.get("/phones", (req, res) => {
  console.log(chalk.blue(`REQUEST MADE TO 'phones'`));
  res.send({ phones });
});

app.listen(port);
console.log(
  chalk.bgBlue("\n----------------------------------------------------------")
);
console.log(
  chalk.bgBlue(
    "------------------ Running on port " + port + " ------------------"
  )
);
console.log(
  chalk.bgBlue("----------------------------------------------------------\n")
);

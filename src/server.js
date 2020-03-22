import express from "express";
import chalk from "chalk";
import phones from "../assets/phones";

const app = express();
const router = express.Router();

app.use("/", router);
const port = process.env.PORT || 3000;

router.get("/phones", (req, res) => {
  console.log(chalk.blue(`---------------------------------------`));
  console.log(chalk.blue(`REQUEST MADE TO 'phones'`));
  console.log(chalk.blue(`---------------------------------------`));

  res.send({ phones });
});

app.listen(port);
console.log(chalk.bgBlue("\n----------------------------------------------------------"));
console.log(chalk.bgBlue("------------------ Running on port " + port + " ------------------"));
console.log(chalk.bgBlue("----------------------------------------------------------\n"));

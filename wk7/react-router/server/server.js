import express from "express";
import cors from "cors";
import { db } from "./utils/dbconnection.js";

const app = express();
const PORT = process.env.API_PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, function () {
  console.log(`Server is alive and listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "This is the root route of the API." });
});

app.get("/get_data", async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM test`);
    res.json(data.rows);
  } catch {
    console.log("Oh no a GET error what happen!");
    res.status(500).json({ success: false });
  }
});

app.post("/add_record", (req, res) => {
  const { name, cheese } = req.body;
  try {
    const addRecord = db.query(
      `INSERT INTO test (name, cheese) VALUES ($1,$2)`,
      [name, cheese]
    );
    res.status(200).json({ success: true });
  } catch {
    console.log("Oh no a POST error what happen!");
    res.status(500).json({ success: false });
  }
});

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

app.get("/get_people", async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM people`);
    res.json(data.rows);
  } catch {
    console.log("Oh no a GET error what happen!");
    res.status(500).json({ success: false });
  }
});

app.get("/get_posts", async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM people WHERE posts > 10`);
    res.json(data.rows);
  } catch {
    console.log("Oh no a GET error what happen!");
    res.status(500).json({ success: false });
  }
});

app.post("/add_record", (req, res) => {
  const { name, country, region, posts, bio } = req.body;
  try {
    const addRecord = db.query(
      `INSERT INTO people (name, country, region, posts, bio) VALUES ($1,$2,$3,$4,$5)`,
      [name, country, region, posts, bio]
    );
    res.status(200).json({ success: true });
  } catch {
    console.log("Oh no a POST error what happen!");
    res.status(500).json({ success: false });
  }
});

app.delete("/delete_record/:id", (req, res) => {
  const recordId = req.params.id;
  try {
    const deleteRecord = db.query(`DELETE FROM people WHERE id = $1`, [
      recordId,
    ]);
    res.status(200).json({ success: true });
  } catch {
    console.log("Oh no a DELETE error what happen!");
    res.status(500).json({ success: false });
  }
});

app.put("/update_verified/:id", (req, res) => {
  const body = req.body;
  const recordId = req.params.id;
  try {
    const updateRecord = db.query(
      `UPDATE people SET verified = $1 WHERE id = $2`,
      [body.verified, recordId]
    );
    res.status(200).json({ success: true });
  } catch {
    console.log("Oh no an UPDATE error what happen!");
    res.status(500).json({ success: false });
  }
});

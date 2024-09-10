import fs from "fs";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import multer, { diskStorage } from "multer";

dotenv.config();

const app = express();

const upload = multer({
  storage: diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]);
    },
  }),
});

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    preflightContinue: true,
  })
);

app.use("/public", express.static(path.resolve(__dirname, "..", "public")));

const port = process.env.PORT || 3000;
const catPath = __dirname + "/../data/cats.json";

app.get("/cats", (req, res) => {
  const cats = JSON.parse(fs.readFileSync(catPath, "utf8"));
  res.header("Content-Type", "application/json");
  res.json(cats);
});

app.post("/cats", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const cats = JSON.parse(fs.readFileSync(catPath, "utf8"));

  const newCat = {
    ...req.body,
    image: `http://localhost:3000/public/` + req.file.filename,
  };

  const updatedCats = [...cats, newCat];

  fs.writeFileSync(catPath, JSON.stringify(updatedCats));

  res.json(updatedCats);
});

app.delete("/cats/:id", (req, res) => {
  const cats = JSON.parse(fs.readFileSync(catPath, "utf8"));

  const updatedCats = cats.filter((cat: any) => cat.id != req.params.id);

  fs.writeFileSync(catPath, JSON.stringify(updatedCats));

  res.json(updatedCats);
});

app.patch("/cats/:id", (req, res) => {
  const cats = JSON.parse(fs.readFileSync(catPath, "utf8"));

  const updatedCats = cats.map((cat: any) =>
    cat.id == req.params.id ? { ...cat, ...req.body } : cat
  );

  fs.writeFileSync(catPath, JSON.stringify(updatedCats));

  res.json(updatedCats);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

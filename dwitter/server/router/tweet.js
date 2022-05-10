import express from "express";
import "express-async-errors";
const router = express.Router();

let tweets = [
  {
    id: "1",
    text: "New semester",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "",
  },
];

//GET /tweets
//GET /tweets?username=:username
//GET /tweets/:id

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id} not found` });
  }
});

router.post("/", (req, res, next) => {
  const text = req.body.text;
  const username = req.body.username;
  const name = req.body.name;

  const tweet = {
    id: Date.now().toString(),
    username,
    text,
    createdAt: new Date(),
    name,
  };

  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id == id);

  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: "cannot delete" });
  }
});

export default router;

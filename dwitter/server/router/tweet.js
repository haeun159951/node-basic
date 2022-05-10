import express from "express";
import "express-async-errors";
const router = express.Router();

const tweets = [
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
  const tweet = tweets.find((t) => {
    t.id === id;
  });

  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet ${id}` });
  }
});

export default router;

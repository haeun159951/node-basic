const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  "kiVRLwv**dpA"
);

console.log(token);

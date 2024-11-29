const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, "your-secret-key", {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };

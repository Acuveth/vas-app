const login = (req, res) => {
  const { email, password } = req.body;

  // Add your login logic here
  if (email === "test@example.com" && password === "password") {
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const register = (req, res) => {
  const { email, password } = req.body;

  // Add your registration logic here
  res.json({ message: "User registered successfully!" });
};

module.exports = { login, register };

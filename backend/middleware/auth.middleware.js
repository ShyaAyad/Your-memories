const jwt = require("jsonwebtoken");

const protectedRoute = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  jwt.verify(token, "myJWT", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Authentication required" });
    }

    req.userId = decodedToken.id; // user id from the token
    next();
  });
};

module.exports = { protectedRoute };

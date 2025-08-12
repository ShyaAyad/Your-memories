const jwt = require("jsonwebtoken");

const protectedRoute = (req, res, next) => {
  console.log("Request headers:", req.headers.cookie); // See if any cookies are sent
  console.log("All cookies:", req.cookies);

  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "myJWT", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({ message: "Authentication required" });
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "Authentication required" });
  }
};

module.exports = { protectedRoute };

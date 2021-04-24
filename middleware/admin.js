const admin = (req, res, next) => {
  console.log("adimin..");
  if (!req.user.isAdmin) return res.status(403).send("Access denied");
  next();
};

module.exports = admin;

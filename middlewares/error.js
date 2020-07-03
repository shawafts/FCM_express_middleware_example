module.exports = function (err, req, res, next) {
  console.log("Error:", new Error(err));
  if (res.headersSent) return;
  res.status(500).send("Something Failed");
};

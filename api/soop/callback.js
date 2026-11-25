module.exports = function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "SOOP callback endpoint ready"
  });
};


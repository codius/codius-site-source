module.exports = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === 'http') {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
};

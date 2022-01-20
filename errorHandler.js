function errorHandler(error, req, res, next) {
  console.error(error.message);
  console.error(error.status)
  res.render('errorPage', {
    error
  });
};

module.exports = errorHandler;





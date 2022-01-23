function errorHandler(err, req, res, next) {
  if(err.status === 500) {
    err.message = `It's not you. It's us! Something went wrong on the server. Sorry! Please try again!`
  }
  console.error(err.message);
  console.error(err.status)
  res.render('errorPage', {
    err
  });
};

module.exports = errorHandler;





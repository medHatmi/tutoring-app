const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

function checkAuth(req, res, next) {

  // console.log(req.headers.authorization);

  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    // const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    const token = req.headers.xjwt.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    // console.log(token);
    if (!token) {
      throw new Error('Authentication failed !');
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Not Authorized, Token Failed");
    // const error = new HttpError('Authentication failed!', 403);
    // return next(error);
  }
};

module.exports = {
    checkAuth: checkAuth
}
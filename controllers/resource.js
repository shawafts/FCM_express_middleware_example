const { draftNotification } = require("../helpers/notification");
exports.addResource = async (req, res, next) => {
  /*
    Code for async operation for adding resources, 
    retrieving user details including firebase token goes here
    */

  /*
    On succeesful operation we need to notify user
    But first, send back response to the user. 
    */
  res.status(200).send("<Your response data>");

  /*
    Draft the notification message to send to user
    and add it to request object so that
    the notification middleware gets the data. 
    */

  req.notificationData = draftNotification(data, firebaseToken);

  /* 
    Call next() to call next middleware function in the stack
    In our case, notification middleware
    */
  next();
};

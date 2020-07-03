const firebase = require("firebase-admin");

module.exports = async function (req, res, next) {
  /* 
    Check whether the data is present, 
    if not call next()
    */
  if (!req.notificationData) next();
  let notificationData = req.notificationData;

  /*
    Here, I am putting the following code inside a try-catch block,
    so that we can handle the error regading notification here, rather 
    than a centralised error handler. 
    This will help us in logging the status of the notification. 
    If the token provided is expired or invalid, send() will throw an
    exception.
    */

  try {
    response = await firebase.messaging().send(req.notificationData.message);
    notificationData.sent = true;
  } catch (error) {
    notificationData.error = error.message;
  }

  /* 
    Its always a good practice to log the notification send to the user, 
    so that, the user can view all the notification at one place.
    This also helps in debugging.
    */

  let notification = new Notification(notificationData); // Create this model acc to your needs.
  await notification.save();

  /* On Success return, so that the express life-cycle ends here */
  return;
};

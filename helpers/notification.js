const draftNotification = (data, firebaseToken) => {
  // Create title and body according to your application logic
  let body = "<Notifaction Body>";
  let title = "<Title>";

  let notificationData = {
    message: {
      notification: {
        title: title,
        body: body,
      },
      token: firebaseToken,
    },

    //Meta Data for logging...
    userId: data.userId, // User info
    sent: false, // Notification status
    error: null, // Errors if present
    date: new Date(),
  };

  return notificationData;
};

exports.draftNotification = draftNotification;

// firebase-messaging-sw.js

// Import the Firebase scripts that are needed
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCrME2ECtGTjwEYBosN85Ul2fMrFDzHkrs",
  authDomain: "fist-a6079.firebaseapp.com",
  projectId: "fist-a6079",
  storageBucket: "fist-a6079.firebasestorage.app",
  messagingSenderId: "464980683392",
  appId: "1:464980683392:web:c676dd18cd219df1975465",
  measurementId: "G-YMD1Z623TY"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload?.notification?.body
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});



messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);

  self.clients.matchAll().then((clients) => {
    if (clients.length === 0) {
      console.warn("[firebase-messaging-sw.js] No active clients found to send messages.");
    } else {
      clients.forEach((client) => {
        console.log("[firebase-messaging-sw.js] Sending message to client:", client);
        client.postMessage({
          type: "NOTIFICATION_PAYLOAD",
          payload: payload.notification.body,
        });
      });
    }
  });

});


self.addEventListener("push", (event) => {
  if (event.data) {
    const payload = event.data.json();
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };

    // Display the notification
    self.registration.showNotification(notificationTitle, notificationOptions);

    // Post the message to the React app
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      clients.forEach((client) => {
        client.postMessage(payload);
      });
    });
  }
});


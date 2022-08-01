import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Add the public key generated from the console here.
messaging.getToken({vapidKey: "BHmH4iaG8JtPeSNOMTPXiPQe0GWwQGfkZnxl7-NyZuivjJFQR8FKV9hW4EuTfoQLA-gwH_CWvsA1PPS8T7kfaT0"});
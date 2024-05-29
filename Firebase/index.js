
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhPEUB08cG8hcyTTU8Hq2NaWayobPRHSU",
    authDomain: "http5214-cee9f.firebaseapp.com",
    projectId: "http5214-cee9f",
    storageBucket: "http5214-cee9f.appspot.com",
    messagingSenderId: "473482344471",
    appId: "1:473482344471:web:546bff2ff11ad1bf294452",
    measurementId: "G-PY48KY0BDR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = getDatabase();
  const messages = ref(database, "messages");

  onValue(messages,(snapshot) => {
        console.log(snapshot);
        const ul = document.getElementById("messages");

        ul.replaceChildren("");

  snapshot.forEach((childSnapshot) => {
  console.log(childSnapshot.key);
  console.log(childSnapshot.val());

  const childData = childSnapshot.val();

  const text = document.createTextNode(childData.message + " , " + childData.name);

  const li = document.createElement("li");
  li.appendChild(text);
  ul.appendChild(li);

});
});

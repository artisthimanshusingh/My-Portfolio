// Import Firebase from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIJ0UeZUs0RzjXtLhfbj-DnvwpeBHjiU",
  authDomain: "artisthimanshusingh-3a9cd.firebaseapp.com",
  projectId: "artisthimanshusingh-3a9cd",
  storageBucket: "artisthimanshusingh-3a9cd.firebasestorage.app",
  messagingSenderId: "553538420194",
  appId: "1:553538420194:web:2f6725a745bf2230eb8dbb",
  measurementId: "G-9BM2G3KDMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export db so script.js can use it
export { db, analytics };

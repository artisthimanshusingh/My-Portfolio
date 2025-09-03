// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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

// Export db so you can use it elsewhere
export { db, analytics };

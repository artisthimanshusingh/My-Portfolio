// script.js
import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===== Helper: Initialize Firestore doc for each image =====
async function ensureDoc(imageId) {
  const ref = doc(db, "artworks", imageId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { likes: 0, comments: [] });
  }
  return ref;
}

// ===== Setup Like + Comment Logic =====
function setupCard(card) {
  const imageId = card.dataset.id;
  const likeBtn = card.querySelector(".like");
  const likesDisplay = card.querySelector(".likes");
  const commentForm = card.querySelector("form");
  const commentInput = card.querySelector("input");
  const commentList = card.querySelector(".comment-list");

  ensureDoc(imageId).then((ref) => {
    // Real-time updates
    onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        likesDisplay.textContent = data.likes;
        commentList.innerHTML = "";
        data.comments.forEach((c) => {
          const div = document.createElement("div");
          div.className = "comment";
          div.textContent = c;
          commentList.appendChild(div);
        });
      }
    });

    // Like button
    likeBtn.addEventListener("click", async () => {
      await updateDoc(ref, { likes: increment(1) });
    });

    // Comment form
    commentForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = commentInput.value.trim();
      if (!text) return;
      await updateDoc(ref, { comments: arrayUnion(text) });
      commentInput.value = "";
    });
  });
}

// ===== Setup Gallery =====
document.querySelectorAll(".card").forEach(setupCard);

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("open");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
});

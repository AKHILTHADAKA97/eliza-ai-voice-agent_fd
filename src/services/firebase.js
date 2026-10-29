import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    !firebaseConfig.apiKey.includes("YOUR_")
  );
}

let app = null;
let auth = null;
let googleProvider = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
  } catch (err) {
    console.error("Failed to initialize Firebase:", err);
  }
}

export { auth, googleProvider };

/**
 * Initiates Google sign-in using Firebase Authentication popup.
 * Returns the authenticated user profile and Firebase ID token.
 */
export async function signInWithGoogle() {
  if (!isFirebaseConfigured()) {
    if (!app && firebaseConfig.apiKey && firebaseConfig.projectId) {
      app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
      auth = getAuth(app);
      googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({ prompt: "select_account" });
    } else {
      throw new Error(
        "Firebase is not configured. Please add your Firebase configuration (VITE_FIREBASE_API_KEY, etc.) to .env"
      );
    }
  }

  if (!auth) {
    auth = getAuth(app || (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)));
  }
  if (!googleProvider) {
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const idToken = await user.getIdToken(true); // force refresh for fresh token

    return {
      user,
      email: user.email,
      displayName: user.displayName || user.email?.split("@")[0] || "User",
      photoURL: user.photoURL || "",
      idToken,
    };
  } catch (err) {
    if (
      err.code === "auth/popup-closed-by-user" ||
      err.code === "auth/cancelled-popup-request"
    ) {
      const cancelError = new Error("Sign-in cancelled. Please try again.");
      cancelError.code = "CANCELLED";
      throw cancelError;
    }
    if (err.code === "auth/popup-blocked") {
      throw new Error("Popup blocked by browser. Please allow popups for this site and try again.");
    }
    if (err.code === "auth/unauthorized-domain") {
      throw new Error("This domain is not authorized in Firebase Console (Authentication > Settings > Authorized domains).");
    }
    throw new Error(err.message || "Failed to sign in with Google.");
  }
}

export async function signOutFromFirebase() {
  if (auth) {
    try {
      await signOut(auth);
    } catch {}
  }
}


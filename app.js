import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// العناصر
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("error-msg");

// تسجيل حساب جديد
signupBtn.onclick = async () => {
  errorMsg.textContent = "";
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if(!username || !email || !password){
    errorMsg.textContent = "يرجى ملء جميع الحقول";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول");
  } catch (error) {
    errorMsg.textContent = error.message;
  }
};

// تسجيل الدخول
loginBtn.onclick = async () => {
  errorMsg.textContent = "";
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if(!email || !password){
    errorMsg.textContent = "يرجى ملء جميع الحقول";
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // الانتقال للصفحة الرئيسية بعد تسجيل الدخول
    window.location.href = "dashboard.html";
  } catch (error) {
    errorMsg.textContent = error.message;
  }
};

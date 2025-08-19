// document.addEventListener('DOMContentLoaded', () => {
//   const signInBtn = document.querySelector('.sign-in');
//   const signUpBtn = document.querySelector('.sign-up');
//   const finish = document.querySelector('.finish')

//   if (signInBtn) {
//     signInBtn.addEventListener('click', () => {
//       window.location.href = 'sign-in.html';
//     });
//   }

//   if (signUpBtn) {
//     signUpBtn.addEventListener('click', () => {
//       window.location.href = 'sign-up.html';
//     });
//   }

//   if (finish) {
//     signUpBtn.addEventListener('click', () => {
//       window.location.href = 'intrests.html';
//     });
//   }
// });

const sign_in_btn = document.querySelector('.sign-in');
const sign_up_btn = document.querySelector('.sign-up');
const finish = document.querySelector('.finish')

sign_in_btn.addEventListener("click",() => {
    window.location.href = "sign-in.html"
})
sign_up_btn.addEventListener("click",() => {
    window.location.href = "sign-up.html"
})
finish.addEventListener("click",() => {
    window.location.href = "intrests.html"
})
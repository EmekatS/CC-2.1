document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.querySelector('.sign-in');
  const signUpBtn = document.querySelector('.sign-up');

  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      window.location.href = 'sign-in.html';
    });
  }

  if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
      window.location.href = 'sign-up.html';
    });
  }
});
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
let save_btn = document.querySelector('#save-to-localStorage');
let notification = document.querySelector('.notification');
save_btn.addEventListener('click',() => {
    notification.classList.remove('bounceOutDown');
    notification.classList.add('bounceInUp');
    setTimeout(() => {
        notification.classList.remove('bounceInUp');
        notification.classList.add('bounceItDown');
    },4000);


});
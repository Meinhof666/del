// menu__active
const menu = document.querySelector('.menu__content');
const menuBtn = document.getElementById('menu__btn');
const menuBtnClose = document.getElementById('menu__btn__close');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});
// menu__active
// search__active
const search = document.querySelector('.search__content');
const searchBtn = document.getElementById('search__btn');
const searchBtnClose = document.getElementById('search__btn__close');

searchBtn.addEventListener('click', () => {
    search.classList.add('search__active');
});

searchBtnClose.addEventListener('click', () => {
    search.classList.remove('search__active');
});
// search__active
// like__active
const like = document.querySelector('.like__content');
const likeBtn = document.getElementById('like__btn');
const likeBtnClose = document.getElementById('like__btn__close');

likeBtn.addEventListener('click', () => {
    like.classList.add('like__active');
});

likeBtnClose.addEventListener('click', () => {
    like.classList.remove('like__active');
});
// like__active
// announcement__active
const announcement = document.querySelector('.announcement__content');
const announcementBtn = document.getElementById('announcement__btn');
const announcementBtnClose = document.getElementById('announcement__btn__close');

announcementBtn.addEventListener('click', () => {
    announcement.classList.add('announcement__active');
});

announcementBtnClose.addEventListener('click', () => {
    announcement.classList.remove('announcement__active');
});
// announcement__active
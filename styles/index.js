let scrollBar = document.getElementById('banner');

function scrollChange() {
    scrollBar.style.backgroundColor = '#f6d9f7';
    scrollBar.style.color = '#ff0000';
}

function scrollBack() {
    scrollBar.style.backgroundColor = '#ff0000';
    scrollBar.style.color = '#f6d9f7';
}

scrollBar.onmouseover = scrollChange;
scrollBar.onmouseout = scrollBack;

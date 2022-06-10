function Showop1(url) {
    document.getElementById('shoe-photos').src = url;
}
function Showop2(e) {
    let list = document.getElementsByClassName('img-item');
    for (let x of list) {
        x.style.opacity = 0.5;
    }
    document.getElementById('shoe-photos').src = e.src;
    e.style.opacity = 1;
}
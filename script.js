let btn = document.querySelector('.btn');
let nav = document.querySelector('.item');
btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});
const cursor = document.getElementById('pointer');
document.onmousemove = (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
};
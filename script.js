let btn = document.querySelector('.btn');
let nav = document.querySelector('.item');
let x = document.querySelector(".x_bar");
btn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});
const cursor = document.getElementById('pointer');
document.onmousemove = (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.style.display = "block";
};
document.onmouseout = () => {
    cursor.style.display = "none";
};

x.addEventListener("click", ()=>{
    nav.classList.remove('active');
});
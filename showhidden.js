function show1(){
    show.removeEventListener("click",show1);
    show.classList.add("hidden");
    hide.classList.remove("hidden");
}

function show2() {
    hide.classList.add("hidden");
    detail.classList.remove("hidden");
}

function hide1() {
    hide.classList.remove("hidden");
    detail.classList.add("hidden");
}

const show = document.querySelector("#show");
show.addEventListener("click", show1);

const hide = document.querySelector("#show1");
hide.addEventListener("click", show2);

const detail = document.querySelector("#hid");
detail.addEventListener("click", hide1);


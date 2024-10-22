let yesBtn = document.querySelector("#yes-btn");
let noBtn = document.querySelector("#no-btn");
let img = document.querySelector(".container img");
let p = document.querySelector("p");

let state = 1;

yesBtn.addEventListener("click", () => {
    state = 4;
    changeState();
});

noBtn.addEventListener("click", () => {
    if (state === 3) {
        let left = Math.floor(Math.random() * 100);
        let top = Math.floor(Math.random() * 100);

        console.log(left);
        console.log(top);

        noBtn.style = `position: absolute; top: ${top}% ; left: ${left}%`;
    } else {
        state++;
        changeState();
    }
});

function changeState() {
    switch (state) {
        case 2:
            img.src = "2.gif";
            p.innerText = "Soch lo";
            break;

        case 3:
            img.src = "3.gif";
            p.innerText = "Ek baar phir soch lo !";
            break;

        case 4:
            img.src = "4.gif";
            p.innerText = "Hehe ! I knew it !";
            yesBtn.classList.add("d-none");
            noBtn.classList.add("d-none");
            break;
    }
}

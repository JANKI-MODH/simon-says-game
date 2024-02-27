let gameseq = [];
let userseq = [];
let color = ["red", "yellow", "green", "blue"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    }
    levelup();
})

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userflash(btn) {
    btn.classList.add("user");
    setTimeout(function () {
        btn.classList.remove("user")
    }, 250);
}


function levelup() {
    userseq = [];
    level++;
    if (level > 1) {
        document.querySelector("h2").innerText = `congratulations!! You are promoted to level ${level} `
    }
    else {
        h2.innerText = `level ${level}`
    }
    setTimeout(function () {
        h2.innerText = `level ${level}`
    }, 1200)


    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = color[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

}

function checkAns(idx) {
    // let idx = level - 1;
    if (gameseq[idx] === userseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000)
        }

    }
    else {
        h2.innerHTML = `GAME OVER!!!  Your score is <b>${level}</b> <br> Press any key to start a game`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();

    }
}


function btnpress() {
    console.log(this);
    let btn = this;
    userflash(btn);

    user = btn.getAttribute("id")
    userseq.push(user);
    // console.log(userseq);


    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress)
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

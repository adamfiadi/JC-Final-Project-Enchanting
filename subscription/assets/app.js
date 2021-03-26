console.log("test");

var btn;
var mbtn;
var pbtn;

btn = document.querySelector('.mainBtn');
btn.addEventListener('click', () => {
    if (btn.innerText = 'Add to Cart') {
        btn.innerText = 1;
        pbtn.style.display = 'inline-block';
        mbtn.style.display = 'inline-block';
    }
})
mbtn = document.querySelector('.minusBtn');
mbtn.addEventListener('click', () => {
    if (btn.innerText == 5) {
        pbtn.style.display = 'inline-block';
    }

    if (btn.innerText < 2) {
        btn.innerText = 'Add to Cart'
        pbtn.style.display = 'none';
        mbtn.style.display = 'none';
    } else {
        btn.innerText = btn.innerText - 1;
    }
})

pbtn = document.querySelector('.plusBtn');
pbtn.addEventListener('click', () => {
    btn.innerText = +(btn.innerText) + + 1;

    if (btn.innerText == 5) {
        pbtn.style.display = 'none';
    }
})
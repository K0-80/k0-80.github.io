let body = document.querySelector('body');
let canvas = document.getElementById('dotsCanvas');

canvas.width = document.documentElement.scrollWidth;
canvas.height = document.documentElement.scrollHeight;

const ctx = canvas.getContext('2d');
const dots = [];
const arrayColors = ['#999999', '#777777', '#555555', '#333333', '#111111'];
for (let index = 0; index < 50; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 1,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
body.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x: event.clientX + window.scrollX - canvas.getBoundingClientRect().left,
        y: event.clientY + window.scrollY - canvas.getBoundingClientRect().top,
    }

    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})

body.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = body.offsetWidth;
    canvas.height = body.offsetHeight;

    dots = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})

const bobaTeaHeader = document.getElementById("boba-tea-header");

let links = [
    "https://www.youtube.com/watch?v=4P6_4O2Ncxg",
    "https://www.youtube.com/watch?v=9ni3Ip2ynjc&t=2s",
    "https://www.youtube.com/watch?v=KpykL32XR00&t=52s"
  ];
  
  bobaTeaHeader.addEventListener("click", () => {
    let rdm = Math.floor(Math.random() * links.length);
    window.location.href = links[rdm];
  });

bobaTeaHeader.addEventListener("mousedown", () => {
    bobaTeaHeader.style.transform = "scale(0.9)";
});

bobaTeaHeader.addEventListener("mouseup", () => {
    bobaTeaHeader.style.transform = "none";
});
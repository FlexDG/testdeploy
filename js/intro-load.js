gsap.fromTo(
  ".loading-page", {
    opacity: 1
  }, {
    opacity: 0,
    display: "none",
    duration: 0.50,
    delay: 3,
    onComplete: showCursor,
  }
);

gsap.fromTo(
  ".loading-page", {
    opacity: 1
  }, {
    opacity: 0,
    display: "none",
    duration: 0.50,
    delay: 3,
    onComplete: showCursor2,
  }
);

const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('a');

function updateCursorPos(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
}

document.addEventListener('mousemove', updateCursorPos);

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  cursor.style.display = "none";
  cursorinner.style.display = "none";
}


document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover');
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click');
    cursorinner.classList.remove('cursorinnerhover');
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});


function showCursor() {
  const cursor = document.querySelector('.cursor');
  cursor.style.opacity = 1; 
}

function showCursor2() {
  const cursor = document.querySelector('.cursor2');
  cursor.style.opacity = 1; 
}
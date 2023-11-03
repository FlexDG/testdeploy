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

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;

  localStorage.setItem('cursorX', x);
  localStorage.setItem('cursorY', y);

  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

function showCursor() {
  const cursor = document.querySelector('.cursor');
  cursor.style.opacity = 1; 
}

function showCursor2() {
  const cursor = document.querySelector('.cursor2');
  cursor.style.opacity = 1; 
}
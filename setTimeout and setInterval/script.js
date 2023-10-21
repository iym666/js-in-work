const btn = document.querySelector('.btn');
let timer,
    i = 0;

btn.addEventListener('click', () => {
  // const timer = setTimeout(logger, 2000);
  timer = setInterval(logger, 500);
});


function logger() {
  if (i === 3) {
    clearInterval(timer);
  }
  console.log('text');
  i++;
}

let id = setTimeout(function log() {
  console.log('Hello!');
  id = setTimeout(log, 500);
}, 500);
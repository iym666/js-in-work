const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  // const timer = setTimeout(logger, 2000);
  const timer = setInterval(logger, 2000);
});

// clearInterval(timer);

function logger() {
  console.log('text');
}
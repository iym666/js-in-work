const timer = setTimeout(logger, 2000);

clearInterval(timer);

function logger() {
  console.log('text');
}
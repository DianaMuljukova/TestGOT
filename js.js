var btn = document.querySelector('.btn');
var perfect = document.querySelector('.perfect');
var good = document.querySelector('.good');
var normal = document.querySelector('.normal');
var bad = document.querySelector('.bad');

var forth = document.querySelector('.forth');
var third = document.querySelector('.third');
var second = document.querySelector('.second');
var first = document.querySelector('.first');
var checkpoint = document.querySelector('.checkpoint');
var input = document.querySelectorAll('.myButton');

var sum = 0;

function check(n, link) {
  sum = sum + n;
  console.log(sum);
  if (link) {
    document.location = link;
  }
  return sum;
};



btn.addEventListener('click', function (evt) {
  evt.preventDefault();
if (sum >= 6 && sum <= 10) {
  third.classList.remove('hidden');
  document.location = '#r3';
} else if (sum > 11 && sum <= 15) {
  forth.classList.remove('hidden');
  document.location = '#r4';
} else if (sum >= 1 && sum <= 5) {
  second.classList.remove('hidden');
  document.location = '#r2';
} else {
  first.classList.remove('hidden');
  document.location = '#r1';
}
});





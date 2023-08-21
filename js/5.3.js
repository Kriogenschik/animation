//task1 
let field1 = document.getElementById('field1');
let ball1 = document.getElementById('ball1');

ball1.addEventListener('click', function() {
	let distance = field1.clientHeight - ball1.clientHeight;

	animate({
		duration: 2000,
		timing: makeEaseOut(bounce),
		draw(progress) {
			ball1.style.top = distance * progress + 'px';
		}
	})
});

function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function bounce(timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

//task2

let field2 = document.getElementById('field2');
let ball2 = document.getElementById('ball2');

ball2.addEventListener('click', function() {
	let distance = field2.clientHeight - ball2.clientHeight;
	let width = 200;

	animate({
		duration: 2000,
		timing: makeEaseOut(bounce),
		draw(progress) {
			ball2.style.top = distance * progress + 'px';
		}
	});

	animate({
		duration: 2000,
		timing: makeEaseOut(left),
		draw(progress) {
			ball2.style.left = width * progress + 'px';
		}
	})
});

function left(timeFraction) {
  return Math.pow(timeFraction, 2);
}
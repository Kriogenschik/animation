//task1-2

let plane1 = document.querySelector('.plane1');

let isEnded = false;
plane1.addEventListener('click', function() {
	plane1.classList.add('fly');
	plane1.addEventListener('transitionend', function() {
		if (!isEnded) {
			isEnded = true;
			alert('Animation ended!');
		}
	})
})

//task3-4

function circleStart() {
	showCircle(370, 150, 100, div => {
		console.log(div);
		div.classList.add('message');
		div.append("HELLO!");
	})
}

function showCircle(cY, cX, radius, callback) {
	let div = document.createElement('div');
	div.style.width = 0;
	div.style.height = 0;
	div.style.left = cX + 'px';
	div.style.top = cY + 'px';
	div.classList.add('circle');
	document.querySelector('.task3-4').append(div);

	setTimeout ( () => {
		div.style.width = div.style.height = radius * 2 + 'px';

		let isMessage = false
		div.addEventListener('transitionend', function() {
			if (!isMessage) {
				callback(div);
				isMessage = true;
			}
			
		});
	})
}
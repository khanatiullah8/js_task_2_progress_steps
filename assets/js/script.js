window.addEventListener('load', function () {
	var trackTop = document.querySelector('.track-top');
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	var stepCircle = document.querySelectorAll('.step-circle');
	var initialnum = 0;
	var a = 0;

	function stepCircleShow(num) {

		for (var y of stepCircle) {
			y.classList.add('visibilityHidden');
		}
		stepCircle[num].classList.remove('visibilityHidden');

		if (num >= 1) {
			prev.classList.remove('bg-event');
		} else {
			prev.classList.add('bg-event');
		}

		if (num == stepCircle.length - 1) {
			next.classList.add('bg-event');
		} else {
			next.classList.remove('bg-event');
		}

	}

	stepCircleShow(initialnum);

	function controlBtn(x, b) {
		initialnum += x;
		a += b;
		trackTop.style.width = a + '%';
		stepCircleShow(initialnum);
		for (var i = 0; i <= initialnum; i++) {
			stepCircle[i].classList.remove('visibilityHidden');
		}
	}

	next.addEventListener('click', function () {
		controlBtn(1, 33.33);
	})

	prev.addEventListener('click', function () {
		controlBtn((-1), (-33.33));
	})

})
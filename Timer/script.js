const start = document.getElementById("start");
const reset = document.getElementById("reset");


const h = document.getElementById("hour");
const m = document.getElementById("minute");
const s = document.getElementById("sec");

const startTimer = null;

start.addEventListener("click", function () {
	function startInterval() {
		startTimer = setInterval(function () {
			timer();
		}, 1000);
	}
	startInterval();
});

reset.addEventListener("click", function () {
	h.value = 0;
	m.value = 0;
	s.value = 0;

	stopInterval();
});

function timer() {
	if (h.value == 0 && m.value == 0 && s.value == 0) {
		h.value = 0;
		m.value = 0;
		s.value = 0;
	} else if (s.value != 0) {
		s.value--;
	} else if (m.value != 0 && s.value == 0) {
		s.value = 59;
		m.value--;
	} else if (h.value != 0 && m.value == 0) {
		m.value = 60;
		h.value--;
	}
	return;
}
function stopInterval() {
	clearInterval(startTimer);
}

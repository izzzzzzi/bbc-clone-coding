// 전역 변수 사용 회피 => 즉시 사용 함수
// 화살표 함수를 만들고 감싼 다음 가로 연산자로 실행을 함

(() => {
	const stepElems = document.querySelectorAll('.step');
	const graphicElems = document.querySelectorAll('.graphic-item');

	for (let i = 0; i < stepElems.length; i++) {
		// stepElems[i].setAttribute('data-index', i);
		stepElems[i].dataset.index = i;
		graphicElems[i].dataset.index = i;
	}

	window.addEventListener('scroll', () => {
		let step;
		let boundingRect;

		for (let i = 0; i < stepElems.length; i++) {
			step = stepElems[i];
			boundingRect = step.getBoundingClientRect();
			console.log(boundingRect);
		}
	});
})();

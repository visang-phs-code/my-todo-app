// 현재 카운트 값 (초기값 0)
let count = 0;

// 화면 요소 가져오기
const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// 현재 값을 화면에 반영
function render() {
  countEl.textContent = count;

  // 양수 / 음수에 따라 색상 클래스 적용
  countEl.classList.toggle("positive", count > 0);
  countEl.classList.toggle("negative", count < 0);
}

// 증가 버튼: 1 증가
increaseBtn.addEventListener("click", () => {
  count += 1;
  render();
});

// 감소 버튼: 1 감소
decreaseBtn.addEventListener("click", () => {
  count -= 1;
  render();
});

// 리셋 버튼: 0으로 초기화
resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

// 첫 화면 그리기
render();

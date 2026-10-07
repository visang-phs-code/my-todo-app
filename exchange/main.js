const API_URL = "https://api.exchangerate-api.com/v4/latest/";

const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swap-btn");
const resultBox = document.getElementById("result");

// 숫자와 소수점 외의 문자 입력 막기 (e, +, - 등)
amountInput.addEventListener("keydown", (event) => {
  if (["e", "E", "+", "-"].includes(event.key)) {
    event.preventDefault();
  }
});

function showResult(text, isError = false) {
  resultBox.textContent = text;
  resultBox.classList.toggle("error", isError);
}

async function convert() {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount < 0) {
    showResult("올바른 금액을 입력하세요.", true);
    return;
  }

  convertBtn.disabled = true;
  showResult("변환 중...");

  try {
    const response = await fetch(API_URL + from);
    if (!response.ok) throw new Error("응답 오류");
    const data = await response.json();

    const rate = data.rates[to];
    const converted = amount * rate;
    const format = (value) => value.toLocaleString("ko-KR", { maximumFractionDigits: 2 });

    showResult(`${format(amount)} ${from} = ${format(converted)} ${to}`);
  } catch (error) {
    showResult("환율 정보를 불러오지 못했습니다. 잠시 후 다시 시도하세요.", true);
  } finally {
    convertBtn.disabled = false;
  }
}

// From과 To 통화를 서로 바꾸고, 금액이 있으면 바로 다시 변환
function swapCurrencies() {
  const from = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = from;

  if (amountInput.value.trim() !== "") {
    convert();
  }
}

convertBtn.addEventListener("click", convert);
swapBtn.addEventListener("click", swapCurrencies);

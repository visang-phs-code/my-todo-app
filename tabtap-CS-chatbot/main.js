// 테스트 데이터_261001.xlsx (A 대분류, B 중분류, C 운영자답변)
const FAQ = [
  {
    category: "결제/구독/환불",
    question: "이용권이나 상품을 구매하고 싶어요",
    answer: "기출탭탭의 상품은 웹 페이지(https://tabtap.co.kr/)와 앱에서 구매할 수 있습니다.\n\n● 웹 페이지 구매 (웹 결제)\n웹 페이지에서는 월 구독, 탭탭프리패스6, 탭탭프리패스12, 탭탭수능패스를 모두 구매할 수 있습니다.\n웹 페이지에서 구매 방법은 다음과 같습니다.\n① 기출탭탭 웹 페이지(https://tabtap.co.kr/) 접속\n② 상단 메뉴에서 [기출탭탭 구매] 선택\n③ 구매할 상품을 결정 후 [구매하기] 선택\n\n● 앱 구매 (인앱 결제)\n앱에서는 월 구독, 탭탭프리패스6, 탭탭프리패스12, 탭탭수능패스를 모두 구매할 수 있습니다.\n앱에서 구매 방법은 다음과 같습니다.\n① [기출탭탭 앱] 실행\n② 왼쪽 상단의 [메뉴 아이콘] 선택\n③ 메뉴 상단의 [이용권 구매하기] 선택\n④ 구매할 상품을 결정 후 [구매하기] 선택"
  },
  {
    category: "결제/구독/환불",
    question: "다음 결제일이 궁금해요",
    answer: "월 구독 상품은 처음 결제한 날을 기준으로 매월 같은 날에 정기 결제가 이루어집니다.\n\n예를 들어, 11월 17일에 처음 결제한 경우 12월 17일, 1월 17일, 2월 17일 등에 자동 결제됩니다.\n\n다만, 특정 월에 결제일이 없는 경우 해당 월 말일에 결제되고 그 다음 달부터 결제일이 그날로 변경됩니다.\n예를 들어, 1월 31일에 처음 결제한 경우 2월 28일, 3월 28일, 4월 28일 등에 자동 결제됩니다."
  },
  {
    category: "결제/구독/환불",
    question: "월구독 정기결제를 해지하고 싶어요",
    answer: "월 구독 상품은 아래의 방법에 따라 직접 해지 신청을 하셔야 합니다.\n● 웹 결제인 경우\n웹 결재한 월 구독 상품은 아래의 방법에 따라 기출탭탭 웹 페이지에서 해지 신청을 하셔야 합니다.\n\n① 기출탭탭 웹 페이지(https://tabtap.co.kr/) 접속\n② 오른쪽 상단의 [로그인] 선택\n③ SNS 계정으로 로그인\n④ 오른쪽 상단의 [계정>구매내역] 선택\n⑤ [구독 해지] 선택\n\n● 인앱 결제인 경우\n인앱 결재한 월 구독 상품은 태블릿 PC의 OS에 따라 App Store나 Google Play Store에서 직접 해지 신청을 하셔야 합니다.\nOS별 해지 신청 방법은 다음과 같습니다.\n\n1. iOS\n① [App Store 앱] 실행\n② 오른쪽 상단의 [계정] 선택\n③ [구독] 선택\n④ [기출탭탭] 선택\n⑤ [구독 취소] 선택\n\n2. AOS\n① [Paly Store 앱] 실행\n② 오른쪽 상단의 [계정] 선택\n③ [결제 및 정기 결제] 선택\n④ [정기 결제] 선택\n⑤ [기출탭탭] 선택\n⑥ [정기 결제 취소] 선택\n\n✔ 월 구독 해지는 최소한 다음 결제일 하루 전에는 반드시 해 주셔야 합니다.\n✔ 기출탭탭 앱을 삭제 또는 탈퇴해도 월 구독 해지는 되지 않으니 반드시 App Store, Google Play Store, 기출탭탭 웹 페이지에서 해지 신청을 해 주셔야 합니다."
  },
  {
    category: "결제/구독/환불",
    question: "월구독 및 탭탭패스를 환불하고 싶어요",
    answer: "취소 및 환불의 경우 회원님께서 구매하신 상품에 대해 직접 환불 요청을 하셔야 합니다. \n\n● 웹 결제인 경우\n① 기출탭탭 웹 페이지(https://tabtap.co.kr/) 접속\n② 오른쪽 상단의 [로그인] 선택\n③ SNS 계정으로 로그인\n④ 오른쪽 상단의 [계정>구매내역] 선택\n⑤ [구독 취소 요청] 선택\n\n✔ 환불 접수는 언제든지 가능하며, 관리자의 확인 후 순차적으로 처리됩니다.\n✔ 환불 처리는 영업일 기준으로 진행되므로, 주말 및 공휴일에는 처리가 지연될 수 있는 점 참고 부탁드립니다.\n\n● 인앱 결제인 경우\n인앱 결재한 월 구독 상품은 태블릿 PC의 OS에 따라 App Store나 Google Play Store에서 직접 취소 및 환불 신청을 하셔야 합니다.\n\n1. iOS\n인앱 결제한 상품에 대한 취소 및 환불은 Apple의 정책에 따라 Apple 고객센터를 통해 진행됩니다.\n자세한 내용은 다음 링크를 참고해 주시기 바랍니다.\n\nhttps://support.apple.com/ko-kr/HT204084\n \n2. AOS\n인앱 결제한 상품에 대한 취소 및 환불은 Google의 정책에 따라 Google 고객센터를 통해 진행됩니다.\n자세한 내용은 다음 링크를 참고해 주시기 바랍니다.\n\nhttps://support.google.com/googleplay/workflow/9813244?hl=ko"
  },
  {
    category: "결제/구독/환불",
    question: "비상eBook을 환불하고 싶어요",
    answer: "비상eBook 취소 및 환불 시 아래와 같은 방법으로 취소 및 환불을 신청하실 수 있습니다.\n\n① 기출탭탭 웹 페이지(https://tabtap.co.kr/) 접속\n② 오른쪽 상단의 [로그인] 선택\n③ SNS 계정으로 로그인\n④ 오른쪽 상단의 [계정 > 구매내역] 선택\n⑤ [구독 해지] 선택\n\n✔ 결제일로부터 7일 이내 기출탭탭 App에서 비상eBook을 학습(필기/정답체크/채점)하지 않은 경우에만 환불이 가능합니다.\n✔ 장바구니를 통해 여러 비상eBook 상품을 구매하셨다면 각각 상품에 대한 환불 처리도 가능합니다.\n\n✔ 환불 접수는 언제든지 가능하며, 관리자의 확인 후 순차적으로 처리됩니다.\n✔ 환불 처리는 영업일 기준으로 진행되므로, 주말 및 공휴일에는 처리가 지연될 수 있는 점 참고 부탁드립니다."
  },
  {
    category: "결제/구독/환불",
    question: "받은 이용권을 사용하고 싶어요",
    answer: "다양한 이용권은(번호, 텍스트 쿠폰 등) 다음과 같은 방법으로 등록하여 이용할 수 있습니다.\n\n[태블릿 PC]\n① [기출탭탭 앱] 실행\n② 왼쪽 상단의 [메뉴 아이콘] 선택\n③ 메뉴 상단의 [프로필 이미지]나 [닉네임] 선택\n④ 왼쪽 하단의 [이용권] 선택\n⑤ 이용권을 직접 입력해야 할 경우, 이용권 번호 or 텍스트 쿠폰명 입력 후 [등록] 선택\n\n휴대폰, IOS 기기(아이패드 등)를 이용하는 경우,\n기출탭탭 홈페이지에서 다음과 같은 방법으로 등록하여 이용할 수 있습니다.\n\n[기출탭탭 홈페이지]\n① 기출탭탭 홈페이지 이동\n② 오른쪽 상단의 [로그인/회원가입] 버튼 선택 후 로그인\n③ 오른쪽 상단의 [이름] 버튼 선택 후 이용권 메뉴로 이동\n④ 하단의 [보유한 이용권] 중 사용하기 선택\n⑤ 이용권을 직접 입력해야 할 경우, 이용권 번호 or 텍스트 쿠폰명 입력 후 [등록] > [사용하기] 선택"
  },
  {
    category: "결제/구독/환불",
    question: "7일 무료 이용권을 사용하고 싶어요",
    answer: "기출탭탭에서는 신규 회원가입 시 7일 무료 체험 이용권을 발급해드리고 있습니다.\n해당 이용권은 가입일로부터 2주 이내에 사용이 가능합니다.\n\n다만, iOS 기기(아이패드 등)를 이용하시는 경우,\niOS 정책상 앱 내에서 이용권이 직접 노출되지 않기 때문에\n태블릿에서 바로 이용권 사용이 어려운 점 양해 부탁드립니다.\n\n번거로우시더라도 아래 방법을 통해 이용권 사용을 진행부탁드립니다.\n\n[이용권 사용 방법]\n① 기출탭탭 홈페이지 접속 (https://tabtap.co.kr/web/main)\n② 오른쪽 상단 [로그인/회원가입] 버튼 선택 후 로그인\n③ 로그인 후 오른쪽 상단에 표시되는 [닉네임] 버튼 선택 → [이용권] 메뉴로 이동\n④ 하단 [보유한 이용권] 항목에서 [사용하기] 선택\n⑤ 이용권 번호 입력 후 [등록]하여 사용 완료"
  },
  {
    category: "결제/구독/환불",
    question: "할인 쿠폰을 사용하고 싶어요",
    answer: "할인 쿠폰은 다음과 같은 방법으로 등록하여 이용할 수 있습니다.\n① 기출탭탭 웹 페이지(https://tabtap.co.kr/) 접속\n② 상단 메뉴의 [기출탭탭 구매] 선택\n③ 원하는 상품을 선택한 후 [구매하기] 선택\n④ 상품 결제 화면에서 사용 가능 [쿠폰] 선택\n⑤ [결제하기] 선택\n\n✔ 할인 쿠폰 사용은 기출탭탭 앱에서는 불가능하고 기출탭탭 웹 페이지(https://tabtap.co.kr/)에서만 가능합니다."
  },
  {
    category: "콘텐츠/eBook",
    question: "종이책을 샀는데 앱에서도 볼 수 있나요?",
    answer: "먼저 기출탭탭 이용과 비상교육의 문제집 구매를 감사드립니다.\n\n현재 기출탭탭에서는 비상eBook을 통해 비상교육의 베스트셀러 문제집을 제공하고 있습니다.\n\n다만, 종이책으로 문제집을 구입하셨다고 하더라도 기출탭탭 앱에서 사용을 하고자 하신다면, \n별도 기출탭탭 앱 용으로 eBook을 구매하셔야 합니다.\n\n기출탭탭 앱을 통한 비상eBook 문제집 구매 시\n기출탭탭 앱에서 제공되는 OMR카드를 통해 개별채점 및 일괄채점 기능으로 보다 편리한 학습을 하실 수 있습니다.\n\n또한, 기출탭탭 이용권을 구매 시 \n기출탭탭에서 제공되는 서비스 (수능기출 문제, 비상eBook, 스터디그룹 등)를 모두 무제한으로 이용 가능합니다.\n\n관련하여 추가 문의가 있다면 문의하기 게시판을 통하여 문의 부탁드립니다."
  },
  {
    category: "콘텐츠/eBook",
    question: "비상eBook을 PDF로 받을 수 있나요?",
    answer: "현재 기출탭탭 서비스에 수록된 문제 콘텐츠의 경우 저작권 보호 대상 자료가 포함되어 있어\nPDF 형태로의 다운로드 기능은 제공이 어려운 점 양해 부탁드립니다.\n\n추가로 건의사항이나 불편하신 점이 있으시다면\n문의하기 게시판을 통해 문의 부탁드립니다."
  },
  {
    category: "콘텐츠/eBook",
    question: "비상eBook 화면을 캡처할 수 없어요",
    answer: "비상eBook에 수록된 문제 콘텐츠는 저작권 보호 대상 자료가 포함되어 있어 캡쳐 기능이 제한되고 있습니다.\n이로 인해 캡쳐 시 화면이 공란으로 표시될 수 있는 점 양해 부탁드립니다.\n\n더 편리하고 안정적인 학습 환경을 제공해드릴 수 있도록 계속해서 노력하겠습니다.\n\n추가 문의사항 있으시면 문의하기를 통해 남겨주세요."
  }
];

const NO_MATCH_LABEL = "원하는 답변이 없어요";

// 1:1 문의 입력 제한
const INQUIRY_MAX_LENGTH = 1000;
const MAX_FILES = 3;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const FILE_ACCEPT = "image/*,.pdf";

const chatBody = document.getElementById("chatBody");
const resetBtn = document.getElementById("resetBtn");

// 대분류 목록 (엑셀 순서 유지, 중복 제거)
function getCategories() {
  return [...new Set(FAQ.map((item) => item.category))];
}

function getQuestions(category) {
  return FAQ.filter((item) => item.category === category);
}

function scrollToBottom() {
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
}

// 텍스트 안의 URL을 링크로 바꿔서 넣는다 (innerHTML 없이)
function appendLinkedText(el, text) {
  const urlPattern = /(https?:\/\/[^\s)]+)/g;
  text.split(urlPattern).forEach((part, i) => {
    if (i % 2 === 1) {
      const a = document.createElement("a");
      a.href = part;
      a.textContent = part;
      a.target = "_blank";
      a.rel = "noopener";
      el.append(a);
    } else {
      el.append(part);
    }
  });
}

// 봇 메시지: 아바타 + 이름 + 말풍선. 내용 영역을 돌려줘서 버튼을 붙일 수 있게 한다
function addBotMessage(text, { answer = false } = {}) {
  const msg = document.createElement("div");
  msg.className = "msg msg--bot";

  const avatar = document.createElement("img");
  avatar.className = "msg__avatar";
  avatar.src = "icon.png";
  avatar.alt = "기출탭탭";

  const content = document.createElement("div");
  content.className = "msg__content";

  const name = document.createElement("span");
  name.className = "msg__name";
  name.textContent = "기출탭탭";

  const bubble = document.createElement("div");
  bubble.className = answer ? "bubble bubble--answer" : "bubble";
  appendLinkedText(bubble, text);

  content.append(name, bubble);
  msg.append(avatar, content);
  chatBody.append(msg);
  scrollToBottom();
  return content;
}

function addUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "msg msg--user";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  msg.append(bubble);
  chatBody.append(msg);
  scrollToBottom();
}

// 선택 버튼 묶음. 하나를 고르면 그 묶음은 잠기고 고른 버튼만 강조된다
// options: [{ label, onSelect, variant }]
function addChoices(content, options, { list = false } = {}) {
  const group = document.createElement("div");
  group.className = list ? "choices choices--list" : "choices";

  options.forEach(({ label, onSelect, variant }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = variant ? `choice choice--${variant}` : "choice";
    btn.textContent = label;
    btn.addEventListener("click", () => {
      btn.classList.add("is-selected");
      group.querySelectorAll(".choice").forEach((b) => (b.disabled = true));
      addUserMessage(label);
      onSelect();
    });
    group.append(btn);
  });

  content.append(group);
  scrollToBottom();
}

// 어느 단계에서 눌렀는지(대분류)를 문의 유형으로 넘긴다
function noMatchOption(category = "") {
  return {
    label: NO_MATCH_LABEL,
    variant: "inquiry",
    onSelect: () => showInquiryIntro(category)
  };
}

function showCategories() {
  const content = addBotMessage("안녕하세요. 기출탭탭 입니다.\n어떤 도움이 필요한지 선택해주세요");
  const options = getCategories().map((category) => ({
    label: category,
    onSelect: () => showQuestions(category)
  }));
  addChoices(content, [...options, noMatchOption()]);
}

function showQuestions(category) {
  const content = addBotMessage(`[${category}] 중 궁금하신 내용을 선택해주세요.`);
  const options = getQuestions(category).map((item) => ({
    label: item.question,
    onSelect: () => showAnswer(item)
  }));
  addChoices(content, [...options, noMatchOption(category)], { list: true });
}

function showAnswer(item) {
  const content = addBotMessage(item.answer, { answer: true });
  addChoices(content, [
    { label: "다른 질문 보기", variant: "ghost", onSelect: () => showQuestions(item.category) },
    { label: "처음으로", variant: "ghost", onSelect: showCategories },
    noMatchOption(item.category)
  ]);
}

function showInquiryIntro(category) {
  const content = addBotMessage(
    "원하시는 답변을 찾지 못하셨나요?\n1:1 문의를 남겨주시면 운영자가 확인 후 답변드릴게요."
  );
  addChoices(content, [
    { label: "1:1 문의하기", variant: "primary", onSelect: () => showInquiryForm(category) },
    { label: "처음으로", variant: "ghost", onSelect: showCategories }
  ]);
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

// 챗봇 안에 문의 입력 폼(유형, 내용, 첨부파일)을 띄운다
function showInquiryForm(category) {
  const content = addBotMessage("문의하실 내용을 입력해주세요.\n사진이나 PDF 파일도 함께 첨부할 수 있어요.");
  let files = [];

  const form = document.createElement("form");
  form.className = "inquiry-form";
  form.noValidate = true;

  // 문의 유형
  const typeLabel = document.createElement("label");
  typeLabel.className = "inquiry-form__label";
  typeLabel.textContent = "문의 유형";
  const typeSelect = document.createElement("select");
  typeSelect.className = "inquiry-form__select";
  [...getCategories(), "기타"].forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    typeSelect.append(option);
  });
  typeSelect.value = category || "기타";
  typeLabel.append(typeSelect);

  // 문의 내용
  const textLabel = document.createElement("label");
  textLabel.className = "inquiry-form__label";
  textLabel.textContent = "문의 내용";
  const textarea = document.createElement("textarea");
  textarea.className = "inquiry-form__textarea";
  textarea.rows = 5;
  textarea.maxLength = INQUIRY_MAX_LENGTH;
  textarea.placeholder = "궁금하신 점이나 불편하신 점을 자세히 적어주세요.";
  const counter = document.createElement("span");
  counter.className = "inquiry-form__counter";
  counter.textContent = `0 / ${INQUIRY_MAX_LENGTH}`;
  textLabel.append(textarea, counter);

  // 첨부파일
  const fileBox = document.createElement("div");
  fileBox.className = "inquiry-form__files";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.accept = FILE_ACCEPT;
  fileInput.hidden = true;
  const fileBtn = document.createElement("button");
  fileBtn.type = "button";
  fileBtn.className = "inquiry-form__file-btn";
  fileBtn.textContent = "📎 파일 첨부";
  const fileHint = document.createElement("span");
  fileHint.className = "inquiry-form__hint";
  fileHint.textContent = `이미지·PDF, 최대 ${MAX_FILES}개 (개당 10MB)`;
  const fileList = document.createElement("ul");
  fileList.className = "file-list";
  fileBox.append(fileInput, fileBtn, fileHint, fileList);

  const error = document.createElement("p");
  error.className = "inquiry-form__error";

  // 버튼
  const actions = document.createElement("div");
  actions.className = "inquiry-form__actions";
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.className = "choice choice--ghost";
  cancelBtn.textContent = "취소";
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "inquiry-form__submit";
  submitBtn.textContent = "문의 보내기";
  submitBtn.disabled = true;
  actions.append(cancelBtn, submitBtn);

  form.append(typeLabel, textLabel, fileBox, error, actions);
  content.append(form);
  scrollToBottom();
  textarea.focus();

  function renderFiles() {
    fileList.replaceChildren();
    files.forEach((file, index) => {
      const li = document.createElement("li");
      li.className = "file-list__item";
      const name = document.createElement("span");
      name.className = "file-list__name";
      name.textContent = file.name;
      const size = document.createElement("span");
      size.className = "file-list__size";
      size.textContent = formatFileSize(file.size);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "file-list__remove";
      remove.setAttribute("aria-label", `${file.name} 삭제`);
      remove.textContent = "✕";
      remove.addEventListener("click", () => {
        files.splice(index, 1);
        renderFiles();
      });
      li.append(name, size, remove);
      fileList.append(li);
    });
    fileBtn.disabled = files.length >= MAX_FILES;
  }

  function lockForm() {
    form.querySelectorAll("input, select, textarea, button").forEach((el) => (el.disabled = true));
    form.classList.add("is-locked");
  }

  textarea.addEventListener("input", () => {
    counter.textContent = `${textarea.value.length} / ${INQUIRY_MAX_LENGTH}`;
    submitBtn.disabled = textarea.value.trim() === "";
    error.textContent = "";
  });

  fileBtn.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    const messages = [];
    [...fileInput.files].forEach((file) => {
      const isAllowed = file.type.startsWith("image/") || file.name.toLowerCase().endsWith(".pdf");
      if (!isAllowed) {
        messages.push(`${file.name}: 이미지나 PDF만 첨부할 수 있어요.`);
      } else if (file.size > MAX_FILE_SIZE) {
        messages.push(`${file.name}: 10MB를 넘는 파일은 첨부할 수 없어요.`);
      } else if (files.length >= MAX_FILES) {
        messages.push(`파일은 최대 ${MAX_FILES}개까지 첨부할 수 있어요.`);
      } else {
        files.push(file);
      }
    });
    error.textContent = [...new Set(messages)].join("\n");
    fileInput.value = ""; // 같은 파일을 다시 고를 수 있게 비운다
    renderFiles();
  });

  cancelBtn.addEventListener("click", () => {
    lockForm();
    addUserMessage("문의 취소");
    const next = addBotMessage("문의 작성을 취소했어요. 다른 도움이 필요하시면 선택해주세요.");
    addChoices(next, [{ label: "처음으로", variant: "ghost", onSelect: showCategories }]);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = textarea.value.trim();
    if (text === "") {
      error.textContent = "문의 내용을 입력해주세요.";
      return;
    }
    lockForm();
    addInquiryMessage(typeSelect.value, text, files);
    const next = addBotMessage(
      "문의가 접수되었어요.\n운영자가 확인 후 순차적으로 답변드릴게요. 감사합니다."
    );
    addChoices(next, [{ label: "처음으로", variant: "ghost", onSelect: showCategories }]);
  });
}

// 사용자가 보낸 문의를 말풍선으로 보여준다
function addInquiryMessage(type, text, files) {
  const msg = document.createElement("div");
  msg.className = "msg msg--user";
  const bubble = document.createElement("div");
  bubble.className = "bubble bubble--inquiry";

  const tag = document.createElement("span");
  tag.className = "bubble__tag";
  tag.textContent = `1:1 문의 · ${type}`;
  const body = document.createElement("p");
  body.className = "bubble__text";
  body.textContent = text;
  bubble.append(tag, body);

  if (files.length > 0) {
    const list = document.createElement("ul");
    list.className = "bubble__files";
    files.forEach((file) => {
      const li = document.createElement("li");
      li.textContent = `📎 ${file.name}`;
      list.append(li);
    });
    bubble.append(list);
  }

  msg.append(bubble);
  chatBody.append(msg);
  scrollToBottom();
}

function resetChat() {
  chatBody.replaceChildren();
  const date = document.createElement("p");
  date.className = "chat-date";
  date.textContent = "오늘";
  chatBody.append(date);
  showCategories();
}

function initApp() {
  resetBtn.addEventListener("click", resetChat);
  resetChat();
}

initApp();

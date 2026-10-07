// 할 일 목록 (LocalStorage에 저장)
const STORAGE_KEY = "todos";

let todos = [];
let nextId = 1;
let currentFilter = "all"; // "all" | "active" | "completed"

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const totalCount = document.querySelector(".total-count");
const doneCount = document.querySelector(".done-count");
const filterButtons = document.querySelectorAll(".filter-button");
const clearButton = document.querySelector(".clear-button");

function initApp() {
    todos = loadTodos();
    // 저장된 항목 중 가장 큰 id 다음 번호부터 사용
    nextId = todos.reduce((max, item) => Math.max(max, item.id), 0) + 1;

    // 추가 버튼 클릭과 Enter 키 모두 form의 submit으로 처리
    form.addEventListener("submit", handleSubmit);

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => setFilter(button.dataset.filter));
    });
    clearButton.addEventListener("click", clearCompleted);

    render();
}

function loadTodos() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        return [];
    }
}

function saveTodos() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        // 저장할 수 없는 환경(시크릿 모드 등)에서는 메모리에만 유지
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") {
        alert("할 일을 입력하세요");
        input.focus();
        return;
    }

    if (todos.some((item) => item.text === text)) {
        alert("이미 등록된 할 일입니다");
        input.focus();
        return;
    }

    addTodo(text);
    input.value = "";
    input.focus();
}

function addTodo(text) {
    todos.push({ id: nextId++, text: text, completed: false });
    update();
}

function toggleTodo(id) {
    const todo = todos.find((item) => item.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    update();
}

function deleteTodo(id) {
    todos = todos.filter((item) => item.id !== id);
    update();
}

function clearCompleted() {
    todos = todos.filter((item) => !item.completed);
    update();
}

function setFilter(filter) {
    currentFilter = filter;
    render();
}

function getVisibleTodos() {
    if (currentFilter === "active") {
        return todos.filter((item) => !item.completed);
    }
    if (currentFilter === "completed") {
        return todos.filter((item) => item.completed);
    }
    return todos;
}

// 데이터가 바뀔 때마다 저장하고 다시 그리기
function update() {
    saveTodos();
    render();
}

function render() {
    const completedCount = todos.filter((item) => item.completed).length;
    totalCount.textContent = todos.length;
    doneCount.textContent = completedCount;
    clearButton.disabled = completedCount === 0;

    filterButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === currentFilter);
    });

    list.innerHTML = "";

    getVisibleTodos().forEach((todo) => {
        const item = document.createElement("li");
        item.className = "todo-item";
        if (todo.completed) {
            item.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.setAttribute("aria-label", "완료");
        checkbox.addEventListener("change", () => toggleTodo(todo.id));

        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = todo.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "삭제";
        deleteButton.addEventListener("click", () => deleteTodo(todo.id));

        item.append(checkbox, text, deleteButton);
        list.appendChild(item);
    });
}

initApp();

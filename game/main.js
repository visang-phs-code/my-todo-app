const GRID = 20;                 // 20x20 격자
const CELL = 400 / GRID;         // 칸 하나 = 20px
const LEVEL_UP_SCORE = 50;       // 50점마다 레벨업
const LEVEL_SPEED_STEP = 10;     // 레벨업마다 이동 간격 10ms 감소
const MIN_SPEED = 20;            // 이동 간격 하한(ms)
const BEST_KEY = "snakeBestScore";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const levelEl = document.getElementById("level");
const finalScoreEl = document.getElementById("final-score");
const difficultySelect = document.getElementById("difficulty");
const pauseBtn = document.getElementById("pause-btn");
const startScreen = document.getElementById("start-screen");
const pauseScreen = document.getElementById("pause-screen");
const gameoverScreen = document.getElementById("gameover-screen");

const DIRECTIONS = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
};

let snake = [];
let direction = DIRECTIONS.ArrowRight;
let nextDirection = direction;
let food = null;
let score = 0;
let level = 1;
let speed = 150;                 // 현재 이동 간격(ms)
let bestScore = Number(localStorage.getItem(BEST_KEY)) || 0;
let timer = null;
let playing = false;             // 게임 중(일시정지 포함)
let paused = false;

bestScoreEl.textContent = bestScore;

function startGame() {
    snake = [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
    ];
    direction = DIRECTIONS.ArrowRight;
    nextDirection = direction;
    score = 0;
    level = 1;
    speed = Number(difficultySelect.value);
    scoreEl.textContent = score;
    levelEl.textContent = level;
    food = placeFood();

    playing = true;
    paused = false;
    difficultySelect.disabled = true;
    pauseBtn.disabled = false;
    pauseBtn.textContent = "일시정지";
    startScreen.classList.add("hidden");
    pauseScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");

    runTimer();
    draw();
}

// 현재 speed로 타이머를 (다시) 돌린다
function runTimer() {
    clearInterval(timer);
    timer = setInterval(tick, speed);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function togglePause() {
    if (!playing) return;
    paused = !paused;

    if (paused) {
        stopTimer();
        pauseBtn.textContent = "재개";
        pauseScreen.classList.remove("hidden");
    } else {
        runTimer();
        pauseBtn.textContent = "일시정지";
        pauseScreen.classList.add("hidden");
    }
}

// 뱀 몸과 겹치지 않는 빈 칸에 먹이를 놓는다
function placeFood() {
    const empty = [];
    for (let y = 0; y < GRID; y++) {
        for (let x = 0; x < GRID; x++) {
            if (!snake.some((part) => part.x === x && part.y === y)) {
                empty.push({ x, y });
            }
        }
    }
    return empty[Math.floor(Math.random() * empty.length)];
}

function tick() {
    direction = nextDirection;
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    const ate = head.x === food.x && head.y === food.y;

    // 먹이를 먹지 않으면 꼬리가 빠지므로, 꼬리 칸은 충돌 검사에서 제외
    const body = ate ? snake : snake.slice(0, -1);
    const hitWall = head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID;
    const hitSelf = body.some((part) => part.x === head.x && part.y === head.y);

    if (hitWall || hitSelf) {
        gameOver();
        return;
    }

    snake.unshift(head);
    if (ate) {
        score += 10;
        scoreEl.textContent = score;
        food = placeFood();
        checkLevelUp();
    } else {
        snake.pop();
    }

    draw();
}

function checkLevelUp() {
    const newLevel = Math.floor(score / LEVEL_UP_SCORE) + 1;
    if (newLevel === level) return;

    level = newLevel;
    levelEl.textContent = level;
    speed = Math.max(MIN_SPEED, speed - LEVEL_SPEED_STEP);
    runTimer();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 먹이
    if (food) {
        ctx.fillStyle = "#f87171";
        ctx.beginPath();
        ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 2, 0, Math.PI * 2);
        ctx.fill();
    }

    // 뱀
    snake.forEach((part, i) => {
        ctx.fillStyle = i === 0 ? "#86efac" : "#4ade80";
        ctx.fillRect(part.x * CELL + 1, part.y * CELL + 1, CELL - 2, CELL - 2);
    });
}

function gameOver() {
    stopTimer();
    playing = false;
    paused = false;
    difficultySelect.disabled = false;
    pauseBtn.disabled = true;
    pauseBtn.textContent = "일시정지";

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem(BEST_KEY, bestScore);
        bestScoreEl.textContent = bestScore;
    }

    finalScoreEl.textContent = score;
    gameoverScreen.classList.remove("hidden");
}

document.addEventListener("keydown", (e) => {
    const newDir = DIRECTIONS[e.key];
    if (!newDir) return;
    e.preventDefault(); // 방향키로 페이지가 스크롤되지 않도록
    if (!playing || paused) return;

    // 바로 반대 방향으로는 꺾을 수 없음
    if (newDir.x === -direction.x && newDir.y === -direction.y) return;
    nextDirection = newDir;
});

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("restart-btn").addEventListener("click", startGame);
pauseBtn.addEventListener("click", togglePause);

draw();

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static HTML/CSS/JS practice workspace. It has no build step, package manager, linter or tests: open an `index.html` file directly in a browser to view it. It is not a git repository.

## Structure

Each folder is a separate page with its own `index.html` and `style.css`. The pages share no code.

- `/`: the "Hello World" page. `style.css` sets a sky-blue to dark-blue gradient background with white text. The "클릭하세요" button has no behavior yet.
- `profile/`: a self-introduction card page (purple theme `#667eea` → `#764ba2`). `main.js` holds only an empty `initApp()` function, which nothing calls yet. It is loaded with `defer`.
- `TOdolist/`: a to-do list page (indigo accent `#4f46e5`). `main.js` keeps to-dos in a `todos` array saved to LocalStorage under the key `"todos"`. Every add, toggle or delete calls `update()`, which saves and then redraws the list and the total/done counts with `render()`. Adding goes through the form's `submit` event, so both the button and Enter work. Completed items get the `.completed` class (strikethrough). Duplicate text (after trim) is rejected. `currentFilter` (`all`/`active`/`completed`, not saved) picks which items `render()` shows, and a button clears all completed items.
- `tabtap-CS-chatbot/`: 기출탭탭 CS chatbot UI (brand color `#2733b2`, palette as CSS variables in `style.css`). `icon.png` is the app icon used for bot avatars. `index.html` has an empty `#chatBody`; `main.js` renders the whole conversation. The Q&A data is the `FAQ` array in `main.js` (`category`/`question`/`answer`), and 대분류 buttons come from its unique categories in order. Picking a choice disables its group, highlights the chosen one and adds a user bubble. Every choice group ends with "원하는 답변이 없어요" (`noMatchOption(category)`). It leads to a 1:1 문의하기 button that opens an in-chat form (`showInquiryForm`): a 문의 유형 select (pre-filled with the current 대분류), a textarea (max 1000 chars) and file attachments (images/PDF, up to 3, 10MB each). Submitting only shows the inquiry as a user bubble plus a "접수" reply: nothing is sent or saved yet, since there is no backend. URLs in answers are turned into links without `innerHTML`. The footer "처음으로" button calls `resetChat()`. The Q&A source is `테스트 데이터_261001.xlsx` (A 대분류, B 중분류, C 운영자답변) in the user's OneDrive folder `#비바코드_2026\비바코드_CS탭탭봇_바이브코딩`.

- `exchange/`: a currency converter (green theme `#10b981` → `#0f766e`). An amount input (numbers only), From/To selects (USD, EUR, KRW, JPY) with a `#swap-btn` "통화 교환" button between them, and a 변환하기 button. Swapping exchanges the two selects and re-runs `convert()` if an amount is entered. `main.js` fetches `https://api.exchangerate-api.com/v4/latest/{from}` on each click and shows `amount × rates[to]` in `#result`. Nothing beyond this was requested, so keep it to those features.
- `game/`: a snake game (dark slate background, green `#4ade80` accent). A 400×400 canvas on a 20×20 grid (20px cells), steered with the arrow keys. `main.js` advances the snake every `speed` ms with `setInterval(tick)` (`runTimer()` restarts it). The `#difficulty` select sets the starting `speed` (쉬움 200 / 보통 150, the default / 어려움 100 / 매우 어려움 50 ms) and is disabled during a game. Every 50 points the level goes up and `speed` drops by 10ms (floor `MIN_SPEED` 20ms). `#pause-btn` toggles 일시정지/재개 and shows a pause overlay. Eating food adds +10 and grows the snake. Hitting a wall or its own body ends the game. The best score is saved to LocalStorage under `"snakeBestScore"`. A 게임 시작 overlay starts the game and a 게임 오버 overlay has a 다시 시작 button.

Keep new pages self-contained in the same way: a new folder with its own files and relative links.

## Conventions

- Page content is in Korean (`<html lang="ko">`), and the user writes requests in Korean.
- Use plain HTML, CSS and vanilla JS, with no frameworks or CDNs unless asked.

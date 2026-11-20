const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const startBtn = document.getElementById('startBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
let spinning = false;
let rotation = 0;

function startSpin() {
  if (spinning) return;
  spinning = true;
  document.getElementById('gameTitle').textContent = 'Проверяем твою удачу…';
  document.getElementById('gameText').textContent = 'Колесо почти остановилось. Осталось совсем немного!';
  spinBtn.disabled = true;
  spinBtn.textContent = 'Крутим…';
  rotation += 1800 + Math.floor(Math.random() * 720);
  wheel.style.transform = `rotate(${rotation}deg)`;
  window.setTimeout(() => {
    document.getElementById('gameTitle').textContent = 'НЕВЕРОЯТНО!';
    document.getElementById('gameText').textContent = 'Система обнаружила подозрительно высокий уровень удачи.';
    spinBtn.disabled = false;
    spinBtn.textContent = 'Посмотреть результат ↗';
    spinBtn.onclick = showResult;
    spinning = false;
  }, 4200);
}
function showResult() {
  document.getElementById('modal').classList.add('show');
  document.getElementById('modal').setAttribute('aria-hidden', 'false');
}
function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('gameTitle').textContent = 'Розыгрыш окончен 😂';
  document.getElementById('gameText').textContent = 'Айфон пока остаётся в мире мечты. Зато линейку можно положить на место!';
}
spinBtn.addEventListener('click', startSpin);
startBtn.addEventListener('click', () => document.getElementById('game').scrollIntoView({behavior:'smooth'}));
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

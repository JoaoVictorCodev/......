import { CONFIG } from './config.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const state = {
  phase: 'start',
};

function drawBackground() {
  ctx.fillStyle = CONFIG.background;
  ctx.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);

  ctx.strokeStyle = CONFIG.border;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(20, CONFIG.groundLevel);
  ctx.lineTo(CONFIG.canvasWidth - 20, CONFIG.groundLevel);
  ctx.stroke();

  ctx.fillStyle = CONFIG.panel;
  ctx.fillRect(20, 20, CONFIG.canvasWidth - 40, 26);
}

function drawStartScreen() {
  drawBackground();

  ctx.textAlign = 'center';
  ctx.fillStyle = CONFIG.accent;
  ctx.font = CONFIG.titleFont;
  ctx.fillText('Chuva de Bugs', CONFIG.canvasWidth / 2, 160);

  ctx.fillStyle = CONFIG.text;
  ctx.font = CONFIG.subtitleFont;
  ctx.fillText('pressione Espaço para começar', CONFIG.canvasWidth / 2, 230);

  const coffeeX = CONFIG.canvasWidth * 0.3;
  const bugX = CONFIG.canvasWidth * 0.7;
  const itemY = 320;

  ctx.font = `${CONFIG.emojiSize}px "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
  ctx.fillText('☕', coffeeX, itemY);
  ctx.fillText('🐛', bugX, itemY);

  ctx.font = CONFIG.hudFont;
  ctx.fillStyle = CONFIG.accent;
  ctx.fillText('☕ 0', 110, 70);
  ctx.fillText('❤️❤️❤️', CONFIG.canvasWidth - 150, 70);
}

function render() {
  if (state.phase === 'start') {
    drawStartScreen();
  }
}

function loop() {
  render();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

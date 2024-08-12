const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over');

const startGame = () => {
  pipe.classList.add('pipe-animation');
  start.style.display = 'none';
}

const restartGame = () => {
  gameOver.style.display = 'none';
  pipe.style.left = '';
  pipe.style.right = '-3000px;';
  player.src = "./images/cubo.png";
  player.style.width = '40px'
  player.style.bottom = '0';

  start.style.display = 'none'
}

const jump = ()  => {
  player.classList.add('jump');
  
  setTimeout(() => {
    player.classList.remove('jump');
  }, 500);
}

const loop = () => {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

    if(pipePosition <= 32 && pipePosition > 0 && playerPosition < 61) {
      pipe.classList.remove('.pipe-animation');
      pipe.style.left = `${pipePosition}px`;

      pipe.classList.remove('.jump');
      player.style.bottom = `${playerPosition}px`;
      player.src = "./images/cubo_gameover.png";

      gameOver.style.display = 'flex';

      clearInterval(loop);
    }
  }, 10);
}

loop();

document.addEventListener('keypress', e => {
  const tecla = e.key;
  if(tecla === ' ') {
    jump();
  }
});

document.addEventListener('touchstart', e => {
  if(e.touches.length) {
    jump();
  }
});

document.addEventListener('keypress', e => {
  const tecla = e.key;
  if(tecla === 'Enter') {
    startGame();
  }
});
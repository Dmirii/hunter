// ипортируем класс игры
import {Game} from './game';

// проверяем , что все загружено
window.onload = () => {
  const rainbowHunter = new Game();
  rainbowHunter.run();
};

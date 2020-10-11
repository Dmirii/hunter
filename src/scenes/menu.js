//  это класс сцены меню
import {Scene} from '../scene';

// наследуемся от родителского класса
export class Menu extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  update(time) {
    if (this.game.control.fire) {
      this.finish(Scene.START_GAME);
    }
  }

  // отрисовывем сцену
  render(time) {
    this.update(time);
    this.game.screen.drawImage(0, 0, 'title');
    this.game.screen.print(220, 440, 'Нажмите пробел');
    super.render(time);
  }
}

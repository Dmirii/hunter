// клас для создания основного экрана
import {Screen} from './screen';
// общий класс для сцен
import {Scene} from './scene';
// класс для упавления состояниями игры
import {ControlState} from './controlState';

// импортируем сцены
import {Menu} from './scenes/menu'; // меню
import {Loading} from './scenes/loading'; // сцена загрузки
import {GameLevel} from './scenes/gameLevel'; // игровой уровень

export class Game {
  constructor({width =640, height = 640} = {}) {
    // экран
    this.screen = new Screen(width, height);
    // загрузка картинок
    this.screen.loadImages({
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png',
    });
    // добавление управления игрой
    this.control = new ControlState();
    // добавление сцен
    this.scenes={
      loading: new Loading(this),
      menu: new Menu(this),
      gameLevel: new GameLevel(this),
    };
    this.currentScene= this.scenes.loading;
    this.currentScene.init();
  }

  changeScene(status) {
    switch (status) {
      case Scene.LOADED:
        return this.scenes.menu;
      case Scene.START_GAME:
        return this.scenes.gameLevel;

      default:
        return this.scenes.menu;
    }
  }

  frame(time) {
    if (this.currentScene.status != Scene.WORKING) {
      this.currentScene = this.changeScene(this.currentScene.status);
      this.currentScene.init();
    }
    this.currentScene.render(time);
    requestAnimationFrame(time => this.frame(time));
  }
  run() {
    requestAnimationFrame(time => this.frame(time));
  }
}

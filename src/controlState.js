// класс для управления состоянием игрового процесса
// изменяем состояни при помощи клавиатуры
export class ControlState {
  constructor() {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;

    // Массив или любой другой итерируемый объект чьими элементами являются пары ключ-значение
    // (массивы из двух элементов, например [[ 1, 'one' ],[ 2, 'two' ]]).
    this.keyMap = new Map([
      [37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire'],
    ]);

    // обновляем статусы событий при нажатии клавиш
    document.addEventListener('keydown', event => this.update(event, true));
    document.addEventListener('keyup', event => this.update(event, false));
  }
  // функция для обновления карты нажатия клавиш
  update(event, presed) {
    if (this.keyMap.has(event.keyCode)) {
      event.preventDefault();
      event.stopPropagation();
      this[this.keyMap.get(event.keyCode)] = presed;
    }
  }
}

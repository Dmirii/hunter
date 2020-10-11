import {TileMap} from './tileMap';
import {ImageLoader} from './ImageLoader';

// клас для создания основного экрана канваса
// и управления отображения элементов на нем
export class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images ={};
    this.isImagesLoaded = false;
    this.camera = null;
    this.isCameraSet = false;
  }

  //
  setCamera(camera) {
    this.camera = camera;
    this.isCameraSet = true;
  }

  loadImages(imageFiles) {
    // создаем обект загрузки картинок
    const loader = new ImageLoader(imageFiles);
    loader.load().then((names) => {
      this.images = Object.assign(this.images, loader.images);
      this.isImagesLoaded = true;
    });
  }

  // создаем холст или берем имеющийся
  createCanvas(width, height) {
    const elements =document.getElementsByTagName('canvas');
    const canvas = elements[0] || document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  // создаем карту
  // делаем пререндар карты в картинку
  createMap(name, mapData, tileset) {
    const mapImage = document.createElement('canvas');
    // задаем размер карты из данных в json
    mapImage.width = mapData.width * mapData.tilewidth;
    mapImage.height = mapData.height * mapData.tileheight;
    //
    const mapContext = mapImage.getContext('2d');
    // обекты для колизии
    const hitboxes =[];
    // переменные для удобства обработки json
    let row; let col;
    mapData.layers.forEach(layer =>{
      if (layer.type == 'tilelayer') {
        row =0;
        col=0;
        layer.data.forEach( index => {
          // прорисовываем тайл если index != 0
          if (index > 0) {
            mapContext.drawImage(this.images[tileset.imageName],
                tileset.getSourceX(index), tileset.getSourceY(index),
                mapData.tilewidth, mapData.tileheight,
                col * mapData.tilewidth, row * mapData.tileheight,
                mapData.tilewidth, mapData.tileheight,);
          }
          col++;
          if (col > (mapData.width-1)) {
            col=0;
            row++;
          }
        });
      }

      if (layer.type == 'objectgroup') {
        hitboxes.push( ...layer.objects.map( obj =>({
          x1: obj.x,
          x2: obj.x + obj.width,
          y1: obj.y,
          y2: obj.y + obj.height,
        })));
      }
    });
    this.images[name] = mapImage;
    return new TileMap({
      imageName: name,
      sourceX: 0,
      sourceY: 0,
      width: mapImage.width,
      height: mapImage.height,
      hitboxes: hitboxes,
    });
  }

  // заполнение экрана цветом
  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  // выводим надписьа на нашем экране
  print( x, y, text) {
    this.context.fillStyle='#FFFFFF';
    this.context.font = '22px Georgia';
    this.context.fillText(text, x, y);
  }

  // выводим картинки из масссива картинок
  drawImage( x, y, imageName) {
    this.context.drawImage(this.images[imageName], x, y);
  }

  // рисуем спрайт

  drawSprite(sprite) {
    let spriteX = sprite.x;
    let spriteY = sprite.y;

    if (this.isCameraSet) {
      spriteX -= this.camera.x;
      spriteY -= this.camera.y;
    }

    if (
      (spriteX >= this.width) ||
        (spriteY >= this.height) ||
        ((spriteX + sprite.width) <= 0) ||
        ((spriteY + sprite.height) <= 0)
    ) {
      return;
    }

    const sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
    const sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
    const width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
    const height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);

    this.context.drawImage(this.images[sprite.imageName],
        sourceX,
        sourceY,
        width,
        height,
        Math.max(0, spriteX),
        Math.max(0, spriteY),
        width,
        height);
  }
}

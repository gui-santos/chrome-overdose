//THE GAME!
var playState = {
  create: function () {
    //
    this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    this.placeholder.anchor.set(0.5);

    //storing points
    this.points = {
      red1: [
        new Phaser.Point(48.08, 0),
        new Phaser.Point(0, 48.08),
        new Phaser.Point(27.58, 60.1),
        new Phaser.Point(60.1, 27.58)
      ]/*,
      red2: [
        new Phaser.Point(72.12, 0),
        new Phaser.Point(0, 72.12),
        new Phaser.Point(41,27, 90.15),
        new Phaser.Point(90.15, 41,27)
      ]*/
    };

    //storing polygons
    this.polygons = {
      red1: new Phaser.Polygon(this.points.red1)
    };
    //this.polygons.red2 = this.polygons.red1.clone();
    //this.polygons.red3 = this.polygons.red2.clone();

    //storing graphics
    this.red1 = game.add.graphics(0, 0);
    //this.red1.boundsPadding = 0;
    this.red1.alpha = 1;
    this.red1.beginFill(0xff0000);
    this.red1.drawPolygon(this.polygons.red1.points);
    this.red1.endFill();


    /*this.red2 = game.add.graphics(300, 100);
    this.red2.beginFill(0xcd0000);
    this.red2.drawPolygon(this.polygons.red2.points);
    this.red2.endFill();
    this.red2.boundsPadding = 0;
    this.red2.width = this.red1.width * 1.5;
    this.red2.height = this.red1.height * 1.5;
    this.red2.alpha = 1;

    this.red3 = game.add.graphics(0, 200);
    this.red3.beginFill(0xa50000);
    this.red3.drawPolygon(this.polygons.red3.points);
    this.red3.endFill();
    this.red3.boundsPadding = 0;
    this.red3.width = this.red2.width * 1.5;
    this.red3.height = this.red2.height * 1.5;
    this.red3.alpha = 1;*/
  },
  update: function () {
    //collision for RED 1
    if (this.polygons.red1.contains(game.input.x, game.input.y) && game.input.activePointer.leftButton.isDown) {
      this.fadeOut(this.red1);
    }
  },
  fadeIn: function (polygon) {
    game.add.tween(polygon).to( { alpha: 1 }, 350, Phaser.Easing.Exponential.Out, true, 0);
  },
  fadeOut: function (polygon) {
    game.add.tween(polygon).to( { alpha: 0 }, 350, Phaser.Easing.Exponential.Out, true, 0, 0, false);
  }
}

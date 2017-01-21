//THE GAME!
var playState = {
  create: function () {
    //
    //this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    //this.placeholder.anchor.set(0.5);

    //storing points
    this.points = {
      red1: [
        new Phaser.Point(48.08, 0),
        new Phaser.Point(0, 48.08),
        new Phaser.Point(27.58, 60.1),
        new Phaser.Point(60.1, 27.58)
      ]
    };

    //storing polygons
    this.polygons = {
      red1: new Phaser.Polygon(this.points.red1)
    };

    //storing graphics
    this.graphs = [];

    //REDs
    this.graphs[0] = game.add.graphics(0, 0);
    this.graphs[0].boundsPadding = 0;
    this.graphs[0].alpha = 1;
    this.graphs[0].beginFill(0xff0000);
    this.graphs[0].drawPolygon(this.polygons.red1.points);
    this.graphs[0].endFill();
  },
  update: function () {
    //collisions for REDs
    var redContain = [
      this.polygons.red1.contains(game.input.x, game.input.y)
    ];

    if (redContain[0] && game.input.activePointer.leftButton.isDown && this.graphs[0].alpha > 0) {
      this.fadeOut(this.graphs[0]);
      alert('deu');
    }
  },
  fadeIn: function (polygon) {
    game.add.tween(polygon).to( { alpha: 1 }, 350, Phaser.Easing.Exponential.Out, true, 0);
  },
  fadeOut: function (polygon) {
    game.add.tween(polygon).to( { alpha: 0 }, 350, Phaser.Easing.Exponential.Out, true, 0, 0, false);
  }
}

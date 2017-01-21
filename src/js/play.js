//THE GAME!
var playState = {
  create: function () {
    //
    //this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    //this.placeholder.anchor.set(0.5);

    //storing colors
    this.colors = [
      '0xff0000'
    ];

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
    this.polygons = [];
    this.polygons[0] = new Phaser.Polygon(this.points.red1);

    //storing graphics
    this.graphs = [];

    //REDs
    this.graphs[0] = game.add.graphics(0, 0);
    this.graphs[0].boundsPadding = 0;
    this.graphs[0].alpha = 1;
    this.graphs[0].beginFill(this.colors[0]);
    this.graphs[0].drawPolygon(this.polygons[0].points);
    this.graphs[0].endFill();

  },
  update: function () {
    //collisions for REDs
    for (var i = 0; i < this.polygons.length; i++) {
      var contain = this.polygons[i].contains(game.input.x, game.input.y);

      if (contain && game.input.activePointer.leftButton.isDown && this.graphs[i].alpha > 0) {
        this.fadeOut(this.graphs[i]);
        this.changeColor(this.colors[i]);
      }
    }

    //make the polygons show up randomly (1 ~ 7)
    //they need to stay on stage for a while. This time gets shorter as the game plays
  },
  fadeIn: function (polygon) {
    game.add.tween(polygon).to( { alpha: 1 }, 350, Phaser.Easing.Exponential.Out, true, 0);
  },
  fadeOut: function (polygon) {
    game.add.tween(polygon).to( { alpha: 0 }, 350, Phaser.Easing.Exponential.Out, true, 0, 0, false);
  },
  changeColor: function (color) {
    game.stage.backgroundColor = color;

    //game.fd.record(4);
  }
}

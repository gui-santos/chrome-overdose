//THE GAME!
var playState = {
  create: function () {
    //
    //this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    //this.placeholder.anchor.set(0.5);
    this.body = document.getElementsByTagName("body")[0];

    //storing colors
    this.colors = [
      '0xff0000', //red1
      '0xcd0000', //red2
      '0xa50000', //red3
      '0xff7f00', //orange1
      '0xff6b00', //orange2
      '0xff6100', //orange3
      '0xffff00', //yeallow1
      '0xffcd00', //yellow2
      '0xffa500', //yellow3
      '0x00ff00', //green1
      '0x00cd00', //green2
      '0x00a500', //green3
      '0x0000ff'//blue1
      '0x0000b9'//blue2
      '0x000091'//blue3
      '0x8f00ff'//lpurple1
      '0x8500cd'//lpurple2
      '0x7100b9'//lpurple3
      '0xaf0082'//purple1
      '0xa5006e'//purple2
      '0xa5005f'//purple3
    ];

    //storing points
    this.points = {
      red1: [
        new Phaser.Point(568.1, 175),
        new Phaser.Point(523, 220.1),
        new Phaser.Point(549.2, 231.2),
        new Phaser.Point(578.2, 200.1)
      ],
      red2: [
        new Phaser.Point(551, 134.5),
        new Phaser.Point(482.4, 203.8),
        new Phaser.Point(523, 220.1),
        new Phaser.Point(568.1, 175)
      ],
      red3: [
        new Phaser.Point(525.8, 76.5),
        new Phaser.Point(424.4, 179.5),
        new Phaser.Point(482.4, 203.8),
        new Phaser.Point(551, 134.5)
      ],
      orange1: [
        new Phaser.Point(523, 220.1),
        new Phaser.Point(523, 283.9),
        new Phaser.Point(549.2, 272.8),
        new Phaser.Point(549.2, 231.2)
      ]
      orange2: [
        new Phaser.Point(482.4,203.8),
        new Phaser.Point(482.3,299.7),
        new Phaser.Point(523,283.9),
        new Phaser.Point(523,220.1)
      ],
      orange3: [
        new Phaser.Point(424.4,179.5),
        new Phaser.Point(424.4,323.8),
        new Phaser.Point(482.3,299.6),
        new Phaser.Point(482.4,203.9)
      ],
      yellow1: [],
      yellow2: [],
      yellow3: [],
      green1: [],
      green2: [],
      green3: [],
      blue1: [],
      blue2: [],
      blue3: [],
      lpurple1: [],
      lpurple2: [],
      lpurple: [],
    };

    //storing polygons
    this.polygons = [];
    this.polygons[0] = new Phaser.Polygon(this.points.red1);
    this.polygons[1] = new Phaser.Polygon(this.points.red2);
    this.polygons[2] = new Phaser.Polygon(this.points.red3);

    this.polygons[3] = new Phaser.Polygon(this.points.orange1);

    //storing graphics
    this.graphs = [];

    //REDs
    this.graphs[0] = game.add.graphics(0, 0);
    this.graphs[0].boundsPadding = 0;
    this.graphs[0].alpha = 1;
    this.graphs[0].beginFill(this.colors[0]);
    this.graphs[0].drawPolygon(this.polygons[0].points);
    this.graphs[0].endFill();

    this.graphs[1] = game.add.graphics(0, 0);
    this.graphs[1].boundsPadding = 0;
    this.graphs[1].alpha = 1;
    this.graphs[1].beginFill(this.colors[1]);
    this.graphs[1].drawPolygon(this.polygons[1].points);
    this.graphs[1].endFill();

    this.graphs[2] = game.add.graphics(0, 0);
    this.graphs[2].boundsPadding = 0;
    this.graphs[2].alpha = 1;
    this.graphs[2].beginFill(this.colors[2]);
    this.graphs[2].drawPolygon(this.polygons[2].points);
    this.graphs[2].endFill();

    //ORANGEs
    this.graphs[3] = game.add.graphics(0, 0);
    this.graphs[3].boundsPadding = 0;
    this.graphs[3].alpha = 1;
    this.graphs[3].beginFill(this.colors[3]);
    this.graphs[3].drawPolygon(this.polygons[3].points);
    this.graphs[3].endFill();

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
    this.body.style.background = color;
    console.log(this.body);
    //game.fd.record(4);
  }
}

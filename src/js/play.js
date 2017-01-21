//THE GAME!
var playState = {
  create: function () {
    //
    //this.placeholder = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder_1');
    //this.placeholder.anchor.set(0.5);
    this.body = document.getElementsByTagName("body")[0];

    //music & sound
    this.mainMusic = game.add.audio('main', 1.5, true);
    this.mainMusic.play();
    this.mainMusicSprite = game.add.sprite(game.world.centerX, game.world.centerY);
    this.mainMusicSprite.anchor.setTo(0.5, 0.5);

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
      '0x0000ff', //blue1
      '0x0000b9', //blue2
      '0x000091', //blue3
      '0x8f00ff', //lpurple1
      '0x8500cd', //lpurple2
      '0x7100b9', //lpurple3
      '0xaf0082', //purple1
      '0xa5006e', //purple2
      '0xa5005f' //purple3
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
      ],
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
      yellow1: [
        new Phaser.Point(523,283.9),
        new Phaser.Point(568.1,329),
        new Phaser.Point(579.1,301.1),
        new Phaser.Point(549.2,272.8)
      ],
      yellow2: [
        new Phaser.Point(482.3,299.7),
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(568.4,328.4),
        new Phaser.Point(523,283.9)
      ],
      yellow3: [
        new Phaser.Point(424.4,323.9),
        new Phaser.Point(527.8,425.7),
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(482.3,299.7),
      ],
      green1: [
        new Phaser.Point(568.1,329),
        new Phaser.Point(631.9,329),
        new Phaser.Point(620.9,301.1),
        new Phaser.Point(579.1,301.1)
      ],
      green2: [
        new Phaser.Point(551.3,369.6),
        new Phaser.Point(649.4,369.6),
        new Phaser.Point(631.9,328.4),
        new Phaser.Point(568.3,328.4)
      ],
      green3: [
        new Phaser.Point(527.8,425.7),
        new Phaser.Point(672.8,425.7),
        new Phaser.Point(649.7,369.6),
        new Phaser.Point(551.3,369.6)
      ],
      blue1: [
        new Phaser.Point(631.9,329),
        new Phaser.Point(677,284.2),
        new Phaser.Point(649.4,272.9),
        new Phaser.Point(620.9,301.3)
      ],
      blue2: [
        new Phaser.Point(649,369),
        new Phaser.Point(717.6,300),
        new Phaser.Point(677,284.2),
        new Phaser.Point(631.9,328.4)
      ],
      blue3: [
        new Phaser.Point(672.3,425.9),
        new Phaser.Point(775.6,323.9),
        new Phaser.Point(717.6,300),
        new Phaser.Point(649,369)
      ],
      lpurple1: [
        new Phaser.Point(677,284.2),
        new Phaser.Point(677,220.1),
        new Phaser.Point(650.7,231.2),
        new Phaser.Point(649.4,272.9)
      ],
      lpurple2: [
        new Phaser.Point(717.6,300.4),
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(677,220.5),
        new Phaser.Point(677,284.2)
      ],
      lpurple3: [
        new Phaser.Point(775.6,323.8),
        new Phaser.Point(776.4,179.5),
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(717.6,300.4),
      ],
      purple1: [
        new Phaser.Point(677,220.1),
        new Phaser.Point(631.9,175),
        new Phaser.Point(621.8,200.1),
        new Phaser.Point(650.7,231.2)
      ],
      purple2: [
        new Phaser.Point(718.2,203.6),
        new Phaser.Point(649,134.5),
        new Phaser.Point(631.9,175),
        new Phaser.Point(677,220.5)
      ],
      purple3: [
        new Phaser.Point(776.4,179.5),
        new Phaser.Point(674.2,76),
        new Phaser.Point(649,134.5),
        new Phaser.Point(718.2,203.6)
      ]
    };

    this.whitePoints = [
      new Phaser.Point(621.8,200.6),
      new Phaser.Point(650.3,231.4),
      new Phaser.Point(649.4,273.4),
      new Phaser.Point(620.9,301.6),
      new Phaser.Point(579.1,301.6),
      new Phaser.Point(549.7,273.1),
      new Phaser.Point(549.7,231.4),
      new Phaser.Point(578.2,200.6),
      new Phaser.Point(621.8,200.6),
    ];

    this.whitePoly = new Phaser.Polygon(this.whitePoints);

    //storing polygons [21]
    this.polygons = [];
    this.polygons[0] = new Phaser.Polygon(this.points.red1);
    this.polygons[1] = new Phaser.Polygon(this.points.red2);
    this.polygons[2] = new Phaser.Polygon(this.points.red3);

    this.polygons[3] = new Phaser.Polygon(this.points.orange1);
    this.polygons[4] = new Phaser.Polygon(this.points.orange2);
    this.polygons[5] = new Phaser.Polygon(this.points.orange3);

    this.polygons[6] = new Phaser.Polygon(this.points.yellow1);
    this.polygons[7] = new Phaser.Polygon(this.points.yellow2);
    this.polygons[8] = new Phaser.Polygon(this.points.yellow3);

    this.polygons[9] = new Phaser.Polygon(this.points.green1);
    this.polygons[10] = new Phaser.Polygon(this.points.green2);
    this.polygons[11] = new Phaser.Polygon(this.points.green3);

    this.polygons[12] = new Phaser.Polygon(this.points.blue1);
    this.polygons[13] = new Phaser.Polygon(this.points.blue2);
    this.polygons[14] = new Phaser.Polygon(this.points.blue3);

    this.polygons[15] = new Phaser.Polygon(this.points.lpurple1);
    this.polygons[16] = new Phaser.Polygon(this.points.lpurple2);
    this.polygons[17] = new Phaser.Polygon(this.points.lpurple3);

    this.polygons[18] = new Phaser.Polygon(this.points.purple1);
    this.polygons[19] = new Phaser.Polygon(this.points.purple2);
    this.polygons[20] = new Phaser.Polygon(this.points.purple3);

    //storing graphics
    this.graphs = [];

    //Building every polygon
    for (var i = 0; i < this.polygons.length; i++) {
      this.graphs[i] = game.add.graphics(0, 0);
      this.graphs[i].boundsPadding = 0;
      this.graphs[i].alpha = 0;
      this.graphs[i].index = i;
      this.graphs[i].beginFill(this.colors[i]);
      this.graphs[i].drawPolygon(this.polygons[i].points);
      this.graphs[i].endFill();
    }

    this.whiteGraph = game.add.graphics(0, 0);
    this.whiteGraph.boundsPadding = 0;
    this.whiteGraph.lineStyle(3, '0xffffff', 1);
    this.whiteGraph.drawPolygon(this.whitePoints);

    this.whiteLine = game.add.graphics(0, 0);
    this.whiteLine.boundsPadding = 0;
    this.whiteLine.moveTo(600, 0);
    this.whiteLine.lineStyle(5, '0xffffff', 1);
    this.whiteLine.lineTo(600, 200.6);

    //game status
    game.playerLives = 3;
    this.isClicked = false;
    this.polyDisplayed = [];

    //time
    this.timeLoop = 1000;
    this.polyIndex = Math.floor(Math.random() * (21 - 0)) + 0;
    this.globalTime = game.time.events.loop(2000, this.makeItFaster, this);
    this.showFreq = game.time.events.loop(this.timeLoop, this.showPoly, this);

    this.fadeIn(this.graphs[this.polyIndex]);
  },
  update: function () {
    //collisions for REDs
    for (var i = 0; i < this.polygons.length; i++) {
      var contain = this.polygons[i].contains(game.input.x, game.input.y);

      if (contain && game.input.activePointer.leftButton.isDown && this.graphs[i].alpha > 0) {
        this.fadeOut(this.graphs[i]);
        this.changeColor(this.colors[i]);

        //play musical note correspondent
        switch (i) {
          case 0:
          case 1:
          case 2:
            game.sound.play('c');
            break;
          case 3:
          case 4:
          case 5:
            game.sound.play('d');
            break;
          case 6:
          case 7:
          case 8:
            game.sound.play('e');
            break;
          case 9:
          case 10:
          case 11:
            game.sound.play('f');
            break;
          case 12:
          case 13:
          case 14:
            game.sound.play('g');
            break;
          case 15:
          case 16:
          case 17:
            game.sound.play('a');
            break;
          case 18:
          case 19:
          case 20:
            game.sound.play('b');
            break;
        }

        this.isClicked = true;
      }
    }

    //check if the player clicked in a wrong spot
    if (!this.isClicked && game.input.activePointer.leftButton.isDown && game.playerLives > 0) {
      game.playerLives--;
      this.isClicked = true;
    }

    //if the player missed 3 times, GAME OVER
    if (game.playerLives === 0) {
      this.gameOverTxt = game.add.text(80, 80, 'perd0000y', {font: '32px Arial', fill: '#ffffff'});
    }

    //reset the clicked event
    if (this.isClicked && game.input.activePointer.leftButton.isUp) {
      this.isClicked = false;
    }

    //end game if all the polygons showed up
    if (this.polyDisplayed.length === 21) {
      this.gameOverTxt = game.add.text(80, 80, 'perd0000y', {font: '32px Arial', fill: '#ffffff'});
    }

    //console.log(this.polyDisplayed.length);

    //they need to stay on stage for a while. This time gets shorter as the game plays
  },
  fadeIn: function (polygon, index) {
    game.add.tween(polygon).to( { alpha: 1 }, 400, Phaser.Easing.Exponential.Out, true, 0);
  },
  fadeOut: function (polygon) {
    game.add.tween(polygon).to( { alpha: 0 }, 350, Phaser.Easing.Exponential.Out, true, 0, 0, false);

    if (this.polyDisplayed.indexOf(polygon.index) > -1) {
      this.polyDisplayed.splice(this.polyDisplayed.indexOf(polygon.index), 1);
    }
  },
  changeColor: function (color) {
    game.stage.backgroundColor = color;
    this.body.style.background = color;
    //console.log(this.body);
    //game.fd.record(4);
  },
  showPoly: function () {
    this.changeColor('0X000');
    this.polyIndex = Math.floor(Math.random() * (21 - 0)) + 0;

    var displayed = false;

    if (this.polyDisplayed.length === 21) {
      alert('PERDEU OTÁRIO!');
    }

    for (var i = 0; i < this.polyDisplayed.length; i++) {
      if (this.polyIndex === this.polyDisplayed[i]) {
        displayed = true;
        return false
      }
    }

    if (!displayed) {
      this.fadeIn(this.graphs[this.polyIndex]);
      this.polyDisplayed.push(this.polyIndex);
    } else {
      this.showPoly();
    }

  },
  makeItFaster: function () {
    this.timeLoop = this.timeLoop / 2;
    this.showFreq.delay = this.timeLoop;
  }
}

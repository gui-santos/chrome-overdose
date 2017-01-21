var menuState = {
  create: function () {
    var title = game.add.text(80, 80, '[INSERT LOGO HERE]', {font: '32px Arial', fill: '#fff'});
    var instruction = game.add.text(80, 200, 'left click to begin', {font: '32px Arial', fill: '#fff'});

    this.video = game.add.video('logo');

    this.video.play(true);
    //this.video.loop(true);

    //  x, y, anchor x, anchor y, scale x, scale y
    this.video.addToWorld();
  },
  update: function () {
    //start game when the user left clicked
    if (game.input.activePointer.leftButton.isDown) {
      game.state.start('play');
    }
  }
}

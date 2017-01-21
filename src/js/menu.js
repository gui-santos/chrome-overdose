var menuState = {
  create: function () {
    var title = game.add.text(80, 80, '[INSERT LOGO HERE]', {font: '32px Arial', fill: '#fff'});
    var instruction = game.add.text(80, 200, 'left click to begin', {font: '32px Arial', fill: '#fff'});

    //add mouse capture input
    //game.input.mouse.capture = true;
  },
  update: function () {
    //start game when the user left clicked
    if (game.input.activePointer.leftButton.isDown) {
      game.state.start('play');
    }
  }
}

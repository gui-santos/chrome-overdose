//loads all the assets and call the menu
var loadState = {
  preload: function () {
    var label = game.add.text(80, 150, 'loading...', {font: '30px Roboto', fill: '#fff'});

    game.load.image('placeholder_1', 'src/assets/placeholder_1.png');
  },
  create: function () {
    game.state.start('menu');
  }
}

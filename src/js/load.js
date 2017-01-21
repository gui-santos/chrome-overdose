//loads all the assets and call the menu
var loadState = {
  preload: function () {
    var label = game.add.text(80, 150, 'loading...', {font: '30px Roboto', fill: '#fff'});

    game.load.video('logo', 'src/assets/gif_inicio.mp4');
  },
  create: function () {
    game.state.start('menu');
  }
}

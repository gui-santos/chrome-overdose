// creates the game
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'game');

//adding the states to the game
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('tutorial', tutorialState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('lost', lostState);
game.state.add('credit', creditState);

//start BootState
game.state.start('boot');

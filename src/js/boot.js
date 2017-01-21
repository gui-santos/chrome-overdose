//calling physics engine and the LoadState
var bootState = {
  create: function () {
    //calling physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //calling loading
    game.state.start('load');
  }
}

//calling physics engine and the LoadState
var bootState = {
  create: function () {
    //calling physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //calling loading
    game.state.start('load');
  },
  resize: function (){
    // this function is called each time the browser is resized, and re-positions
    // game elements to keep them in their right position according to game size
    /*levelText.x = Math.round((game.width-levelText.width)/2);
    levelText.y = game.height;
    titleText.x = Math.round((game.width-titleText.width)/2);
    fixedGroup.x = Math.round((game.width-320)/2);
    fixedGroup.y = Math.round((game.height-320)/2);
    movingGroup.x = Math.round((game.width-320)/2);
    movingGroup.y = Math.round((game.height-320)/2);*/      
  }
}

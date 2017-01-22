var lostState = {
  create: function () {
    this.menuMusic = game.add.audio('menu', 1, true);
    this.menuMusic.play();
    this.menuMusicSprite = game.add.sprite(game.world.centerX, game.world.centerY);
    this.menuMusicSprite.anchor.setTo(0.5, 0.5);

    this.video = game.add.video('lost');
    this.video.play(true);
    this.video.addToWorld();

    this.playAgain = game.add.sprite(1010, 430, 'btn_again');
    this.playAgain.inputEnabled = true;
    this.playAgain.input.useHandCursor = true;

    this.scoreTxt = game.add.text(627, 120, game.playerScore + ' PTS', {font: '56px munro', fill: '#01eeda'});
  },
  update: function () {
    //start game when the user left clicked
    if (this.playAgain.input.pointerOver()) {
      this.changeTexture(this.playAgain, 'btn_again_hover');
    } else {
      this.changeTexture(this.playAgain, 'btn_again');
    }

    if (this.playAgain.input.pointerOver() && game.input.activePointer.leftButton.isDown) {
      this.changeTexture(this.playAgain, 'btn_again_press');
      game.sound.play('f');
      this.menuMusic.destroy();
      game.time.events.loop(250, function () {
        game.state.start('menu');
      }, this);
    }
  },
  changeTexture: function (sprite, newTexture) {
    sprite.loadTexture(newTexture);
  }
}

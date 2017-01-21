var creditState = {
  create: function () {
    this.menuMusic = game.add.audio('menu', 1, true);
    this.menuMusic.play();
    this.menuMusicSprite = game.add.sprite(game.world.centerX, game.world.centerY);
    this.menuMusicSprite.anchor.setTo(0.5, 0.5);

    this.video = game.add.video('credits');

    this.video.play(true);

    this.video.addToWorld();

    this.backBtn = game.add.sprite(979, 401, 'btn_back');
    this.backBtn.inputEnabled = true;
    this.backBtn.input.useHandCursor = true;

  },
  update: function () {
    //start game when the user left clicked
    if (this.backBtn.input.pointerOver()) {
      this.changeTexture(this.backBtn, 'btn_back_hover');
    } else {
      this.changeTexture(this.backBtn, 'btn_back');
    }

    if (this.backBtn.input.pointerOver() && game.input.activePointer.leftButton.isDown) {
      this.changeTexture(this.backBtn, 'btn_back_press');
      game.sound.play('d');
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

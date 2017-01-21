var menuState = {
  create: function () {
    this.menuMusic = game.add.audio('menu', 1, true);
    this.menuMusic.play();
    this.menuMusicSprite = game.add.sprite(game.world.centerX, game.world.centerY);
    this.menuMusicSprite.anchor.setTo(0.5, 0.5);

    this.video = game.add.video('logo');

    this.video.play(true);

    this.video.addToWorld();

    this.startBtn = game.add.sprite(892, 314, 'btn_home');
    this.startBtn.inputEnabled = true;
    this.startBtn.input.useHandCursor = true;

    this.creditsLink = game.add.text(80, 80, 'credits', {font: '32px munro', fill: '#ffffff'});
  },
  update: function () {
    //start game when the user left clicked
    if (this.startBtn.input.pointerOver()) {
      this.changeTexture(this.startBtn, 'btn_hover');
    } else {
      this.changeTexture(this.startBtn, 'btn_home');
    }

    if (this.startBtn.input.pointerOver() && game.input.activePointer.leftButton.isDown) {
      this.changeTexture(this.startBtn, 'btn_press');
      game.sound.play('g');
      this.menuMusic.destroy();
      game.time.events.loop(250, function () {
        game.state.start('play');
      }, this);
    }
  },
  changeTexture: function (sprite, newTexture) {
    sprite.loadTexture(newTexture);
  }
}

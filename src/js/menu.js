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

    this.creditsLink = game.add.text(35, 30, 'credits', {font: '24px munro', fill: '#ffffff'});
    this.creditsLink.inputEnabled = true;
    this.creditsLink.events.onInputOver.add(function () {
      this.creditsLink.fill = '#01eeda';
    }, this);
    this.creditsLink.events.onInputOut.add(function () {
      this.creditsLink.fill = '#ffffff';
    }, this);
    this.creditsLink.events.onInputDown.add(function () {
      this.menuMusic.destroy();
      game.state.start('credit');
    }, this);

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
        game.state.start('tutorial');
      }, this);
    }
  },
  changeTexture: function (sprite, newTexture) {
    sprite.loadTexture(newTexture);
  }
}

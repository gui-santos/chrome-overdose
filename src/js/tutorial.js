var tutorialState = {
  create: function () {
    //this.menuMusic = game.add.audio('menu', 1, true);
    //this.menuMusic.play();
    //this.menuMusicSprite = game.add.sprite(game.world.centerX, game.world.centerY);
    //this.menuMusicSprite.anchor.setTo(0.5, 0.5);

    this.video = game.add.video('tutorial');

    this.video.play(true);

    this.video.addToWorld();

    this.playBtn = game.add.sprite(625, 366, 'btn_start');
    this.playBtn.inputEnabled = true;
    this.playBtn.input.useHandCursor = true;

    this.backLink = game.add.text(35, 30, 'back', {font: '24px munro', fill: '#ffffff'});
    this.backLink.inputEnabled = true;
    this.backLink.events.onInputOver.add(function () {
      this.backLink.fill = '#01eeda';
    }, this);
    this.backLink.events.onInputOut.add(function () {
      this.backLink.fill = '#ffffff';
    }, this);
    this.backLink.events.onInputDown.add(function () {
      //this.menuMusic.destroy();
      game.state.start('menu');
    }, this);

  },
  update: function () {
    //start game when the user left clicked
    if (this.playBtn.input.pointerOver()) {
      this.changeTexture(this.playBtn, 'btn_start_hover');
    } else {
      this.changeTexture(this.playBtn, 'btn_start');
    }

    if (this.playBtn.input.pointerOver() && game.input.activePointer.leftButton.isDown) {
      this.changeTexture(this.playBtn, 'btn_start_press');
      game.sound.play('d');
      //this.menuMusic.destroy();
      game.time.events.loop(250, function () {
        game.state.start('play');
      }, this);
    }
  },
  changeTexture: function (sprite, newTexture) {
    sprite.loadTexture(newTexture);
  }
}

var menuState = {
  create: function () {
    this.video = game.add.video('logo');

    this.video.play(true);

    this.video.addToWorld();

    this.startBtn = game.add.sprite(892, 314, 'btn_home');
    this.startBtn.inputEnabled = true;
    this.startBtn.input.useHandCursor = true;
  },
  update: function () {
    //start game when the user left clicked
    if (this.startBtn.input.pointerOver()) {
      this.changeTexture(this.startBtn, 'btn_hover');
    } else {
      this.changeTexture(this.startBtn, 'btn_home');
    }

    if (game.input.activePointer.leftButton.isDown) {
      this.changeTexture(this.startBtn, 'btn_press');
    }
  },
  changeTexture: function (sprite, newTexture) {
    sprite.loadTexture(newTexture);
  }
}

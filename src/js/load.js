//loads all the assets and call the menu
var loadState = {
  preload: function () {
    var label = game.add.text(35, 30, 'loading...', {font: '24px munro', fill: '#fff'});

    game.load.video('logo', 'src/assets/gif_inicio.mp4');
    game.load.video('credits', 'src/assets/creditos_v1.mp4');
    game.load.video('tutorial', 'src/assets/tutorial.mp4');

    game.load.audio('main', ['src/assets/sound/leo_synthpop_gameplay.mp3']);
    game.load.audio('menu', ['src/assets/sound/leo_synthpop_menu.mp3']);

    game.load.audio('c', ['src/assets/sound/synth_nota1.mp3']);
    game.load.audio('d', ['src/assets/sound/synth_nota2.mp3']);
    game.load.audio('e', ['src/assets/sound/synth_nota3.mp3']);
    game.load.audio('f', ['src/assets/sound/synth_nota4.mp3']);
    game.load.audio('g', ['src/assets/sound/synth_nota5.mp3']);
    game.load.audio('a', ['src/assets/sound/synth_nota6.mp3']);
    game.load.audio('b', ['src/assets/sound/synth_nota7.mp3']);
    game.load.audio('error', ['src/assets/sound/synth_notaerrada.mp3']);

    game.load.image('btn_home', 'src/assets/home/btn.jpg');
    game.load.image('btn_hover', 'src/assets/home/btn_hover.jpg');
    game.load.image('btn_press', 'src/assets/home/btn_press.jpg');

    game.load.image('btn_back', 'src/assets/back/back.png');
    game.load.image('btn_back_hover', 'src/assets/back/back_btn_hover.png');
    game.load.image('btn_back_press', 'src/assets/back/back_btn_press.png');
  },
  create: function () {
    game.state.start('menu');
  }
}

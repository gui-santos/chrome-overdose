//loads all the assets and call the menu
var loadState = {
  preload: function () {
    var label = game.add.text(35, 30, 'loading...', {font: '24px munro', fill: '#fff'});

    game.load.video('logo', 'src/assets/gif_inicio.mp4');
    game.load.video('credits', 'src/assets/creditos_v1.mp4');
    game.load.video('tutorial', 'src/assets/instructions.mp4');
    game.load.video('newton', 'src/assets/newton.mp4');
    game.load.video('win', 'src/assets/win.mp4');
    game.load.video('lost', 'src/assets/lost.mp4');

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

    game.load.image('btn_start', 'src/assets/start/start_btn.png');
    game.load.image('btn_start_hover', 'src/assets/start/start_btn_hover.png');
    game.load.image('btn_start_press', 'src/assets/start/start_btn_press.png');

    game.load.image('btn_again', 'src/assets/again/again_btn.png');
    game.load.image('btn_again_hover', 'src/assets/again/again_btn_hover.png');
    game.load.image('btn_again_press', 'src/assets/again/again_btn_press.png');

    game.load.image('life5', 'src/assets/life_5.png');
    game.load.image('life4', 'src/assets/life_4.png');
    game.load.image('life3', 'src/assets/life_3.png');
    game.load.image('life2', 'src/assets/life_2.png');
    game.load.image('life1', 'src/assets/life_1.png');
  },
  create: function () {
    game.state.start('menu');
  }
}
